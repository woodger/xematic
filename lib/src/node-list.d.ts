import Node from './node';
export default class NodeList extends Node {
    readonly type: number;
    build(): Node[];
}
