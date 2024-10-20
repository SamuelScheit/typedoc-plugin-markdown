"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceType = referenceType;
const markdown_1 = require("../../../libs/markdown");
function referenceType(model) {
    if (model.reflection || (model.name && model.typeArguments)) {
        const reflection = [];
        let base = model.reflection?.name || model.name;
        if (model.typeArguments && model.typeArguments.length) {
            base += this.partials.typeArguments(model.typeArguments);
        }
        if (model.reflection?.url) {
            reflection.push((0, markdown_1.link)(base, this.getRelativeUrl(model.reflection.url)));
        }
        else {
            reflection.push(model.externalUrl ? (0, markdown_1.link)(base, model.externalUrl) : base);
        }
        return reflection.join('');
    }
    return model.externalUrl ? (0, markdown_1.link)(model.name, model.externalUrl) : model.name;
}
