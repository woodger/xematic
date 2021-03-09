import { SchemaDefinition } from 'mongoose';
import Node from './node';

export default class Expression extends Node {
  readonly type: number = 0;
  name: string = '#';

  build() {
    const value = {} as unknown as SchemaDefinition;

    for (const item of this.childs) {
      if (item.name === null) {
        throw new Error('Token is null');
      }

      // if (item.type === 4) {
      //   continue;
      // }

      value[item.name] = item.build();
    }

    return value;
  }

  define(ref: Node): void {
    ref.parent = this;
    this.definitions.push(ref);
  }
}
