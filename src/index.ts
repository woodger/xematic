import { Definition } from 'typescript-json-schema';
import { SchemaDefinition } from 'mongoose';
import parse from './parse';

export {
  Definition,
  SchemaDefinition
};

export default function xematic(shema: Definition): SchemaDefinition {
  return parse(shema).build();
}
