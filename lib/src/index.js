"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = __importDefault(require("./parse"));
function xematic(shema) {
    return parse_1.default(shema).build();
}
exports.default = xematic;
//# sourceMappingURL=index.js.map