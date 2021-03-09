"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor() {
        this.type = null;
        this.childs = [];
        this.definitions = [];
        this.parent = null;
        this.name = null;
        this.value = {};
    }
    append(child) {
        child.parent = this;
        this.childs.push(child);
    }
    build() {
        return this.value;
    }
}
exports.default = Node;
//# sourceMappingURL=node.js.map