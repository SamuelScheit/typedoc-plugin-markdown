"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someType = someType;
const typedoc_1 = require("typedoc");
function someType(model) {
    if (!model) {
        return '';
    }
    if (model instanceof typedoc_1.ArrayType) {
        return this.partials.arrayType(model);
    }
    if (model instanceof typedoc_1.ConditionalType) {
        return this.partials.conditionalType(model);
    }
    if (model instanceof typedoc_1.IndexedAccessType) {
        return this.partials.indexAccessType(model);
    }
    if (model instanceof typedoc_1.InferredType) {
        return this.partials.inferredType(model);
    }
    if (model instanceof typedoc_1.IntersectionType && model.types) {
        return this.partials.intersectionType(model);
    }
    if (model instanceof typedoc_1.IntrinsicType && model.name) {
        return this.partials.intrinsicType(model);
    }
    if (model instanceof typedoc_1.QueryType) {
        return this.partials.queryType(model);
    }
    if (model instanceof typedoc_1.ReferenceType) {
        return this.partials.referenceType(model);
    }
    if (model instanceof typedoc_1.ReflectionType) {
        return this.partials.reflectionType(model);
    }
    if (model instanceof typedoc_1.TypeOperatorType) {
        return this.partials.typeOperatorType(model);
    }
    if (model instanceof typedoc_1.TupleType && model.elements) {
        return this.partials.tupleType(model);
    }
    if (model instanceof typedoc_1.UnionType && model.types) {
        return this.partials.unionType(model);
    }
    if (model instanceof typedoc_1.UnknownType) {
        return this.partials.unknownType(model);
    }
    if (model instanceof typedoc_1.NamedTupleMember) {
        return this.partials.namedTupleType(model);
    }
    if (model.toString() == 'null') {
        return 'null';
    }
    return model?.toString();
}
