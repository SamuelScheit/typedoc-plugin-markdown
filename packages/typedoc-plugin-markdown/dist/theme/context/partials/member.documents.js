"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documents = documents;
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
const markdown_1 = require("../../../libs/markdown");
const typedoc_1 = require("typedoc");
function documents(model, options) {
    return 'documents';
    const md = [];
    const docGroups = model.groups?.filter((group) => group.owningReflection instanceof typedoc_1.DocumentReflection);
    if (docGroups?.length) {
        docGroups.forEach((reflectionGroup) => {
            md.push((0, markdown_1.heading)(options.headingLevel, reflectionGroup.title));
            docGroups.forEach((reflectionGroup) => {
                md.push(this.helpers.getGroupIndex(reflectionGroup));
            });
        });
    }
    return md.join('\n\n');
}
