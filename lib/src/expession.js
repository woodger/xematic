"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = __importDefault(require("./reference"));
class Expression extends reference_1.default {
    constructor() {
        super(...arguments);
        this.type = 0;
        this.definitions = [];
        this.name = '#expression';
    }
    build() {
        const value = {};
        for (const item of this.childs) {
            if (item.name === null) {
                throw new Error('Token is null');
            }
            value[item.name] = item.build();
        }
        return value;
    }
}
exports.default = Expression;
//# sourceMappingURL=expession.js.map