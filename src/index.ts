import { Definition } from 'typescript-json-schema';
import { SchemaDefinition } from 'mongoose';

export {
  Definition,
  SchemaDefinition
};

export default function build(definition: Definition): SchemaDefinition {
  const schema = {};

  if (definition.type === 'object') {

  }

  return schema;
}
