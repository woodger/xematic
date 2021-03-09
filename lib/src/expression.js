"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
class Expression extends node_1.default {
    constructor() {
        super(...arguments);
        this.type = 0;
        this.name = '#';
    }
    build() {
        const value = {};
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
    define(ref) {
        ref.parent = this;
        this.definitions.push(ref);
    }
}
exports.default = Expression;
//# sourceMappingURL=expression.js.map