export interface IValue {
    [key: string]: any;
}
export default abstract class Node {
    readonly type: number | null;
    readonly childs: Array<Node>;
    definitions: Node[];
    parent: Node | null;
    name: string | null;
    value: IValue;
    append(child: Node): void;
    build(): any;
}
