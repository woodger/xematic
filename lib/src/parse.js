"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = __importDefault(require("./field"));
const node_list_1 = __importDefault(require("./node-list"));
const expression_1 = __importDefault(require("./expression"));
function parse(key, value, parent) {
    let node;
    if (value.$ref) {
        const index = value.$ref.lastIndexOf('/');
        const name = value.$ref.substr(index + 1);
        let root = parent;
        do {
            if (root.parent === null) {
                break;
            }
        } while (root = root.parent);
        for (const item of root.definitions) {
            if (item.name === name) {
                parent.append(item);
            }
        }
    }
    else if (value.format === 'date-time') {
        node = new field_1.default();
        node.name = key;
        node.value.type = 'Date';
        parent.append(node);
    }
    else if (value.type === 'string') {
        node = new field_1.default();
        node.name = key;
        node.value.type = 'String';
        parent.append(node);
    }
    else if (value.type === 'number' || value.type === 'integer') {
        node = new field_1.default();
        node.name = key;
        node.value.type = 'Number';
        parent.append(node);
    }
    else if (value.type === 'boolean') {
        node = new field_1.default();
        node.name = key;
        node.value.type = 'Boolean';
        parent.append(node);
    }
    else if (value.type === 'array') {
        node = new node_list_1.default();
        node.name = key;
        parent.append(node);
        // parse(value.items as Definition, node);
    }
    return node;
}
function parseProperties(shema, parent) {
    var _a;
    if (typeof shema === 'boolean') {
        throw new Error(`Exrected Deffinition type`);
    }
    if (!shema.properties) {
        throw new Error(`Field 'properties' is null or undefined`);
    }
    for (const key of Object.keys(shema.properties)) {
        const value = shema.properties[key];
        if (typeof value === 'boolean') {
            throw new Error(`First argument must be Deffinition type`);
        }
        const node = parse(key, value, parent);
        if (((_a = shema.required) === null || _a === void 0 ? void 0 : _a.includes(key)) === true) {
            node.value.required = true;
        }
    }
}
function default_1(shema) {
    const ast = new expression_1.default();
    for (const key of Object.keys(shema.definitions)) {
        const node = new expression_1.default();
        node.name = key;
        ast.define(node);
    }
    for (const item of ast.childs) {
        if (item.name === null) {
            continue;
        }
        const value = shema.definitions[item.name];
        parseProperties(value, item);
    }
    parseProperties(shema, ast);
    return ast;
}
exports.default = default_1;
//# sourceMappingURL=parse.js.map