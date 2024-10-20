"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberWithGroups = memberWithGroups;
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
const markdown_1 = require("../../../libs/markdown");
const typedoc_1 = require("typedoc");
/**
 * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
 */
function memberWithGroups(model, options) {
    const md = [];
    if (model.comment) {
        md.push(this.partials.comment(model.comment, {
            headingLevel: options.headingLevel,
        }));
    }
    if (model.typeHierarchy?.next) {
        md.push(this.partials.hierarchy(model.typeHierarchy, {
            headingLevel: options.headingLevel,
        }));
    }
    if (model.implementedTypes?.length) {
        md.push((0, markdown_1.heading)(options.headingLevel, this.i18n.theme_implements()));
        md.push((0, markdown_1.unorderedList)(model.implementedTypes.map((implementedType) => this.partials.someType(implementedType))));
    }
    if (model.kind === typedoc_1.ReflectionKind.Class && model.categories?.length) {
        model.groups
            ?.filter((group) => group.title === this.i18n.kind_plural_constructor())
            .forEach((group) => {
            md.push((0, markdown_1.heading)(options.headingLevel, this.i18n.kind_plural_constructor()));
            group.children.forEach((child) => {
                md.push(this.partials.constructor(child, {
                    headingLevel: options.headingLevel + 1,
                }));
            });
        });
    }
    if (model.documents ||
        model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
        const isAbsoluteIndex = model?.groups?.every((group) => group.owningReflection.kind !== typedoc_1.ReflectionKind.Document);
        if (isAbsoluteIndex) {
            md.push((0, markdown_1.heading)(options.headingLevel, this.i18n.theme_index()));
        }
        if (model.documents) {
            md.push(this.partials.documents(model, {
                headingLevel: options.headingLevel,
            }));
        }
        md.push(this.partials.reflectionIndex(model, {
            headingLevel: isAbsoluteIndex
                ? options.headingLevel
                : options.headingLevel,
        }));
    }
    md.push(this.partials.body(model, { headingLevel: options.headingLevel }));
    return md.join('\n\n');
}
