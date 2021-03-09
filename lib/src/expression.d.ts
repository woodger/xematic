/// <reference types="mongoose" />
import Node from './node';
export default class Expression extends Node {
    readonly type: number;
    name: string;
    build(): {
        [path: string]: any | typeof import("mongoose").SchemaType | Function[] | import("mongoose").SchemaTypeOptions<any> | import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>, undefined> | import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>, undefined>[] | import("mongoose").SchemaTypeOptions<any>[] | any[];
    };
    define(ref: Node): void;
}
