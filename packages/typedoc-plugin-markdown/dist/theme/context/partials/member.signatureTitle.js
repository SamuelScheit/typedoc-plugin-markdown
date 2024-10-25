"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signatureTitle = signatureTitle;
/* eslint-disable @typescript-eslint/ban-ts-comment */
const markdown_1 = require("../../../libs/markdown");
const utils_1 = require("../../../libs/utils");
function signatureTitle(model, options) {
    const md = [];
    const useCodeBlocks = this.options.getValue('useCodeBlocks');
    const keyword = this.helpers.getKeyword(model.parent.kind);
    if (useCodeBlocks && this.helpers.isGroupKind(model.parent) && keyword) {
        md.push(keyword + ' ');
    }
    if (options?.accessor) {
        md.push((0, markdown_1.backTicks)(options?.accessor) + ' ');
    }
    if (model.parent) {
        const flagsString = this.helpers.getReflectionFlags(model.parent?.flags);
        if (flagsString.length) {
            md.push(this.helpers.getReflectionFlags(model.parent.flags) + ' ');
        }
    }
    if (!['__call', '__type'].includes(model.name)) {
        md.push((0, markdown_1.bold)((0, utils_1.escapeChars)(model.name)));
    }
    md.push(this.partials.signatureParameters(model.parameters || []));
    if (model.type) {
        // @ts-ignore
        if (model.type._target.qualifiedName === 'JSX.Element') {
            md.splice(0, md.length);
            md.push(`\\<${(0, markdown_1.bold)(model.name)} \\/>`);
        }
        else {
            md.push(`: ${(0, markdown_1.backTicks)(this.partials.someType(model.type))}`);
        }
    }
    const result = md.join('');
    return useCodeBlocks ? (0, markdown_1.codeBlock)(result) : result;
}
