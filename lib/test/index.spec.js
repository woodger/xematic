"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const TJS = __importStar(require("typescript-json-schema"));
const src_1 = __importDefault(require("../src"));
describe('JsonSchema', function () {
    this.timeout(1e5);
    it('Compile JsonShema from TypeScript', () => {
        const program = TJS.getProgramFromFiles([
            path_1.resolve('./src/models/user.ts')
        ]);
        const settings = {
            required: true
        };
        const jsonSchema = TJS.generateSchema(program, 'IUser', settings);
        console.log(JSON.stringify(jsonSchema));
        if (jsonSchema !== null) {
            console.log(JSON.stringify(src_1.default(jsonSchema)));
        }
    });
});
//# sourceMappingURL=index.spec.js.map