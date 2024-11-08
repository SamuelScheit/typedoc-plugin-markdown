"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parametersList = parametersList;
const markdown_1 = require("../../../libs/markdown");
const utils_1 = require("../../../libs/utils");
const typedoc_1 = require("typedoc");
function parametersList(model) {
    const parseParams = (current, acc) => {
        const shouldFlatten = current.type?.declaration?.kind === typedoc_1.ReflectionKind.TypeLiteral &&
            current.type?.declaration?.children;
        return shouldFlatten
            ? [...acc, current, ...flattenParams(current)]
            : [...acc, current];
    };
    const flattenParams = (current) => {
        return current.type?.declaration?.children?.reduce((acc, child) => {
            const childObj = {
                ...child,
                name: `${current.name}.${child.name}`,
            };
            return parseParams(childObj, acc);
        }, []);
    };
    const parsedParams = model.reduce((acc, current) => parseParams(current, acc), []);
    const firstOptionalParamIndex = model.findIndex((parameter) => parameter.flags.isOptional);
    const rows = [];
    parsedParams.forEach((parameter, i) => {
        const row = [];
        const isOptional = parameter.flags.isOptional ||
            (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex);
        const rest = parameter.flags.isRest ? '...' : '';
        const optional = isOptional ? '?' : '';
        const name = `${(0, utils_1.escapeChars)(parameter.name)}${optional}`;
        const identifier = [(0, markdown_1.bold)(name)];
        if (parameter.type && !(parameter.type instanceof typedoc_1.ReflectionType)) {
            identifier.push(': ' + (0, markdown_1.backTicks)(this.partials.someType(parameter.type)));
        }
        if (parameter.defaultValue) {
            identifier.push(' = ' + (0, markdown_1.backTicks)(this.helpers.getParameterDefaultValue(parameter)));
        }
        row.push(`• ${rest}${identifier.join('')}`);
        if (parameter.comment) {
            row.push(this.partials.comment(parameter.comment));
        }
        rows.push(row.join('\n\n'));
    });
    return rows.join('\n\n');
}
