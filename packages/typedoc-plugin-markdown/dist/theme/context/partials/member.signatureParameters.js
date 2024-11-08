"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signatureParameters = signatureParameters;
const markdown_1 = require("../../../libs/markdown");
function signatureParameters(model) {
    const format = this.options.getValue('useCodeBlocks');
    const firstOptionalParamIndex = model.findIndex((parameter) => parameter.flags.isOptional);
    return ('(' +
        (0, markdown_1.backTicks)(model
            .map((param, i) => {
            const paramsmd = [];
            if (param.flags.isRest) {
                paramsmd.push('...');
            }
            const paramType = this.partials.someType(param.type);
            // const showParamType = this.options.getValue('expandParameters');
            const paramItem = [
                `${paramType}${param.flags.isOptional ||
                    (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
                    ? '?'
                    : ''}`,
            ];
            paramsmd.push(`${format && model.length > 2 ? `\n   ` : ''}${paramItem.join(': ')}`);
            return paramsmd.join('');
        })
            .join(`, `)) +
        ')');
}
