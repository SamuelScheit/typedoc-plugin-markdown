"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signature = signature;
function signature(model, options) {
    const md = [];
    let modelComments = model.comment || model.parent?.comment;
    if (modelComments &&
        model.parent?.comment?.summary &&
        !options.multipleSignatures) {
        modelComments = Object.assign(modelComments, {
            summary: model.parent.comment.summary,
        });
    }
    if (modelComments && model.parent?.comment?.blockTags) {
        modelComments.blockTags = [
            ...(model.parent?.comment?.blockTags || []),
            ...(model.comment?.blockTags || []),
        ];
    }
    if (modelComments) {
        md.push(this.partials.comment(modelComments, {
            headingLevel: options.headingLevel,
            showTags: false,
            showSummary: true,
        }));
    }
    if (!options.multipleSignatures && model.parent?.documents) {
        md.push(this.partials.documents(model?.parent, {
            headingLevel: options.headingLevel,
        }));
    }
    if (modelComments) {
        md.push(this.partials.comment(modelComments, {
            headingLevel: options.headingLevel,
            showTags: true,
            showSummary: false,
        }));
    }
    md.push(this.partials.inheritance(model, { headingLevel: options.headingLevel }));
    if (!options.nested &&
        model.sources &&
        !this.options.getValue('disableSources')) {
        md.push(this.partials.sources(model, { headingLevel: options.headingLevel }));
    }
    return md.join('\n\n');
}
