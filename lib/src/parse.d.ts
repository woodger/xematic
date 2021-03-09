import { Definition } from 'typescript-json-schema';
import { SchemaDefinition } from 'mongoose';
import Expression from './expression';
export { Definition, SchemaDefinition };
export default function (shema: Definition): Expression;
