"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signatureReturns = signatureReturns;
const markdown_1 = require("../../../libs/markdown");
const typedoc_1 = require("typedoc");
function signatureReturns(model, options) {
    const md = [];
    const typeDeclaration = model.type
        ?.declaration;
    md.push((0, markdown_1.heading)(options.headingLevel, this.i18n.theme_returns()));
    if (typeDeclaration?.signatures) {
        md.push((0, markdown_1.backTicks)('Function'));
    }
    else {
        md.push(this.helpers.getReturnType(model.type));
    }
    if (model.comment?.blockTags.length) {
        const tags = model.comment.blockTags
            .filter((tag) => tag.tag === '@returns')
            .map((tag) => this.helpers.getCommentParts(tag.content));
        md.push(tags.join('\n\n'));
    }
    if (model.type instanceof typedoc_1.ReferenceType && model.type.typeArguments?.length) {
        if (model.type.typeArguments[0] instanceof typedoc_1.ReflectionType &&
            model.type.typeArguments[0].declaration.children) {
            md.push(this.partials.typeDeclaration(model.type.typeArguments[0].declaration, {
                headingLevel: options.headingLevel,
            }));
        }
    }
    if (typeDeclaration?.signatures) {
        typeDeclaration.signatures.forEach((signature) => {
            md.push(this.partials.signature(signature, {
                headingLevel: options.headingLevel,
                nested: true,
            }));
        });
    }
    if (typeDeclaration?.children) {
        md.push(this.partials.typeDeclaration(typeDeclaration, {
            headingLevel: options.headingLevel,
        }));
    }
    return md.join('\n\n');
}
