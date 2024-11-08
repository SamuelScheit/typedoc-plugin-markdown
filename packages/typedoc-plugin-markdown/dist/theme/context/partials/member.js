"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.member = member;
const typedoc_1 = require("typedoc");
function member(model, options) {
    if ([
        typedoc_1.ReflectionKind.Class,
        typedoc_1.ReflectionKind.Interface,
        typedoc_1.ReflectionKind.Enum,
    ].includes(model.kind)) {
        return this.partials.memberWithGroups(model, {
            headingLevel: options.headingLevel + 0,
        });
    }
    if (model.kind === typedoc_1.ReflectionKind.Constructor) {
        return this.partials.constructor(model, {
            headingLevel: options.headingLevel,
        });
    }
    if (model.kind === typedoc_1.ReflectionKind.Accessor) {
        return this.partials.accessor(model, {
            headingLevel: options.headingLevel + 0,
        });
    }
    if (model.signatures) {
        return this.partials.signatures(model, {
            headingLevel: options.headingLevel,
            nested: options.nested,
        });
    }
    if (model instanceof typedoc_1.ReferenceReflection) {
        return this.partials.referenceMember(model);
    }
    return this.partials.declaration(model, {
        headingLevel: options.headingLevel,
        nested: options.nested,
    });
}
