import { SchemaDefinition } from 'mongoose';
import Reference from './reference';
export default class Shema extends Reference {
    readonly type: number;
    definitions: Reference[];
    name: string;
    build(): SchemaDefinition;
}
