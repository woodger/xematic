export interface IValue {
  [key: string]: any;
}

export default abstract class Node {
  readonly type: number | null = null;
  readonly childs: Array<Node> = [];
  definitions: Node[] = [];

  parent: Node | null = null;
  name: string | null = null;
  value: IValue = {};

  append(child: Node): void {
    child.parent = this;
    this.childs.push(child);
  }

  build(): any {
    return this.value;
  }
}
