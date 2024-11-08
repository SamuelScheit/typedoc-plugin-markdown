"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflection = reflection;
const markdown_1 = require("../../../libs/markdown");
const typedoc_1 = require("typedoc");
/**
 * Template that maps to individual reflection models.
 */
function reflection(page) {
    const md = [];
    md.push(this.hook('page.begin', this).join('\n'));
    if (!this.options.getValue('hidePageHeader')) {
        md.push(this.partials.header());
    }
    if (!this.options.getValue('hideBreadcrumbs')) {
        md.push(this.partials.breadcrumbs());
    }
    if (!this.options.getValue('hidePageTitle')) {
        md.push((0, markdown_1.heading)(1, this.partials.pageTitle()));
    }
    md.push(this.hook('content.begin', this).join('\n'));
    if ([
        typedoc_1.ReflectionKind.Module,
        typedoc_1.ReflectionKind.Namespace,
        typedoc_1.ReflectionKind.Enum,
        typedoc_1.ReflectionKind.Class,
        typedoc_1.ReflectionKind.Interface,
    ].includes(page.model.kind)) {
        md.push(this.partials.memberWithGroups(page.model, { headingLevel: 2 }));
    }
    else {
        md.push(this.partials.memberContainer(page.model, { headingLevel: 1 }));
    }
    md.push(this.partials.footer());
    md.push(this.hook('page.end', this).join('\n'));
    return md.join('\n\n');
}
