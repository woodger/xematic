import { Definition, DefinitionOrBoolean } from 'typescript-json-schema';
import { SchemaDefinition } from 'mongoose';
import Node from './node';
import Field from './field';
import NodeList from './node-list';
import Expression from './expression';

export {
  Definition,
  SchemaDefinition
};

function parse(key: string, value: Definition, parent: Node) {
  let node;

  if (value.$ref) {
    const index = value.$ref.lastIndexOf('/');
    const name = value.$ref.substr(index + 1);

    let root = parent;

    do {
      if (root.parent === null) {
        break;
      }
    }
    while (root = root.parent);

    for (const item of root.definitions) {
      if (item.name === name) {
        parent.append(item);
      }
    }
  }
  else if (value.format === 'date-time') {
    node = new Field();

    node.name = key;
    node.value.type = 'Date';

    parent.append(node);
  }
  else if (value.type === 'string') {
    node = new Field();

    node.name = key;
    node.value.type = 'String';

    parent.append(node);
  }
  else if (value.type === 'number' || value.type === 'integer') {
    node = new Field();

    node.name = key;
    node.value.type = 'Number';

    parent.append(node);
  }
  else if (value.type === 'boolean') {
    node = new Field();

    node.name = key;
    node.value.type = 'Boolean';

    parent.append(node);
  }
  else if (value.type === 'array') {
    node = new NodeList();

    node.name = key;
    parent.append(node);

    // parse(value.items as Definition, node);
  }

  return node;
}



function parseProperties(shema: DefinitionOrBoolean, parent: Node) {
  if (typeof shema === 'boolean') {
    throw new Error(`Exrected Deffinition type`);
  }

  if (!shema.properties) {
    throw new Error(`Field 'properties' is null or undefined`);
  }

  for (const key of Object.keys(shema.properties)) {
    const value = shema.properties[key];

    if (typeof value === 'boolean') {
      throw new Error(`First argument must be Deffinition type`);
    }

    const node = parse(key, value, parent);

    if (shema.required?.includes(key) === true) {
      node.value.required = true;
    }
  }
}



export default function(shema: Definition) {
  const ast = new Expression();

  for (const key of Object.keys(shema.definitions!)) {
    const node = new Expression();

    node.name = key;
    ast.define(node);
  }

  for (const item of ast.childs) {
    if (item.name === null) {
      continue;
    }

    const value = shema.definitions![item.name];
    parseProperties(value, item);
  }

  parseProperties(shema, ast);

  return ast;
}
