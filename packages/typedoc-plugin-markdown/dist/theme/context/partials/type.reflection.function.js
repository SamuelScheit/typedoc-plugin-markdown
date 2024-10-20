"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionType = functionType;
function functionType(model, options) {
    const functions = model.map((fn) => {
        const showParameterType = options?.forceParameterType || this.options.getValue('expandParameters');
        const params = fn.parameters
            ? fn.parameters.map((param) => {
                const paramType = this.partials.someType(param.type);
                const paramItem = [
                    `${param.flags.isRest ? '...' : ''}${param.name}${param.flags.isOptional ? '?' : ''}`,
                ];
                if (showParameterType) {
                    paramItem.push(paramType);
                }
                return paramItem.join(': ');
            })
            : [];
        const returns = this.partials.someType(fn.type);
        return `(${params.join(', ')}) => ${returns}`;
    });
    return functions.join('');
}
