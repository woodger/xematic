"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function associatedSchemaType({ type, format }) {
    if (type === 'string' && format === 'date-time') {
        return Date;
    }
    if (type === 'string') {
        return String;
    }
    if (type === 'number') {
        return Number;
    }
    if (type === 'boolean') {
        return Boolean;
    }
    if (type === 'array') {
        return [];
    }
    throw new Error(`Unxpected type`);
}
function build(definition) {
    const schema = {};
    if (definition.type === 'object') {
        if (!definition.properties) {
            throw new Error(`Missing definition 'properties'`);
        }
        for (const key of Object.keys(definition.properties)) {
            const value = definition.properties[key];
            if (typeof value === 'boolean') {
                throw new Error(`Expected 'properties' as Deffinition type`);
            }
            schema[key] = associatedSchemaType(value);
        }
    }
    return schema;
}
exports.default = build;
//# sourceMappingURL=index.js.map