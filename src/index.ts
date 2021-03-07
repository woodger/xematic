import { Definition } from 'typescript-json-schema';
import { SchemaDefinition } from 'mongoose';

export {
  Definition,
  SchemaDefinition
};

interface IMap {
  [key: string]: any;
}

function associatedSchemaType({ type, format }: Definition): any {
  if (type === 'string' && format === 'date-time') {
    return Date;
  }

  if (type === 'string') {
    return String;
  }

  if (type === 'number') {
    return Number;
  }

  if (type === 'boolean') {
    return Boolean;
  }

  if (type === 'array') {
    return [];
  }

  throw new Error(`Unxpected type`);
}

export default function build(definition: Definition): SchemaDefinition {
  const schema: IMap = {};

  if (definition.type === 'object') {
    if (!definition.properties) {
      throw new Error(`Missing definition 'properties'`);
    }

    for (const key of Object.keys(definition.properties)) {
      const value = definition.properties[key];

      if (typeof value === 'boolean') {
        throw new Error(`Expected 'properties' as Deffinition type`);
      }

      schema[key] = associatedSchemaType(value);
    }
  }

  return schema;
}
