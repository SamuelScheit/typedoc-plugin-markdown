"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = categories;
const typedoc_1 = require("typedoc");
function categories(model, options) {
    const md = [];
    model
        ?.filter((category) => !category.allChildrenHaveOwnDocument())
        .forEach((category) => {
        const categoryChildren = category.children?.filter((child) => child.kind !== typedoc_1.ReflectionKind.Constructor);
        if (categoryChildren.length) {
            md.push(category.title);
            if (category.description) {
                md.push(this.helpers.getCommentParts(category.description));
            }
            md.push(this.partials.members(categoryChildren, {
                headingLevel: options.headingLevel,
            }));
        }
    });
    return md.join('\n\n');
}
