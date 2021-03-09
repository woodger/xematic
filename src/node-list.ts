import Node from './node';

export default class NodeList extends Node {
  readonly type: number = 1;

  build() {
    const list: Node[] = [];

    for (const item of this.childs) {
      list.push(
        item.build()
      );
    }

    return list;
  }
}
