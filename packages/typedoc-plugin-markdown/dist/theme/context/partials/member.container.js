"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberContainer = memberContainer;
const markdown_1 = require("../../../libs/markdown");
const typedoc_1 = require("typedoc");
function memberContainer(model, options) {
    const md = [];
    if (!model.hasOwnDocument &&
        model.url &&
        this.options.getValue('useHTMLAnchors')) {
        md.push(`<a id="${model.anchor}" name="${model.anchor}"></a>`);
    }
    if (!model.hasOwnDocument &&
        ![typedoc_1.ReflectionKind.Constructor].includes(model.kind)) {
        md.push((0, markdown_1.heading)(options.headingLevel, this.partials.memberTitle(model, options.nested)));
    }
    md.push(this.partials.member(model, {
        headingLevel: options.headingLevel,
        nested: options.nested,
    }));
    return md.join('\n\n');
}
