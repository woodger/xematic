"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
class NodeList extends node_1.default {
    constructor() {
        super(...arguments);
        this.type = 1;
    }
    build() {
        const list = [];
        for (const item of this.childs) {
            list.push(item.build());
        }
        return list;
    }
}
exports.default = NodeList;
//# sourceMappingURL=node-list.js.map