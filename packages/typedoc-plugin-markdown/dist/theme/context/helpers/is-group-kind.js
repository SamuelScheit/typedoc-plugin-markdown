"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGroupKind = isGroupKind;
const typedoc_1 = require("typedoc");
function isGroupKind(model) {
    const groupKinds = [
        typedoc_1.ReflectionKind.Class,
        typedoc_1.ReflectionKind.Interface,
        typedoc_1.ReflectionKind.Enum,
        typedoc_1.ReflectionKind.Function,
        typedoc_1.ReflectionKind.Variable,
        typedoc_1.ReflectionKind.TypeAlias,
    ];
    return groupKinds.includes(model.kind);
}
