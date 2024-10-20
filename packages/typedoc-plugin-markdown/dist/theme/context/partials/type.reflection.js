"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectionType = reflectionType;
const typedoc_1 = require("typedoc");
function reflectionType(model, options) {
    const root = model instanceof typedoc_1.ReflectionType ? model.declaration : model;
    if (root.signatures) {
        return this.partials.functionType(root.signatures);
    }
    const expandObjects = !options?.forceCollapse &&
        this.options.getValue('expandObjects');
    return expandObjects ? this.partials.declarationType(root) : 'object';
}
