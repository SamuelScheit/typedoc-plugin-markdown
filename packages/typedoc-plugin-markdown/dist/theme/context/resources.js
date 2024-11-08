"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceHelpers = exports.resourcePartials = exports.resourceTemplates = void 0;
const index_1 = require("./index");
const resourceTemplates = (context) => {
    return {
        /**
         * Template that maps to a project document.
         */
        document: (page) => index_1.templates.document.apply(context, [page]),
        /**
         * Template that maps to the root project reflection. This will be the index page / documentation root page.
         */
        project: (page) => index_1.templates.project.apply(context, [page]),
        /**
         * Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.
         */
        readme: (page) => index_1.templates.readme.apply(context, [page]),
        /**
         * Template that maps to individual reflection models.
         */
        reflection: (page) => index_1.templates.reflection.apply(context, [page]),
    };
};
exports.resourceTemplates = resourceTemplates;
const resourcePartials = (context) => {
    return {
        comment: (model, options = {}) => index_1.partials.comment.apply(context, [model, options]),
        body: (model, options) => index_1.partials.body.apply(context, [model, options]),
        categories: (model, options) => index_1.partials.categories.apply(context, [model, options]),
        groups: (model, options) => index_1.partials.groups.apply(context, [model, options]),
        members: (model, options) => index_1.partials.members.apply(context, [model, options]),
        accessor: (model, options) => index_1.partials.accessor.apply(context, [model, options]),
        constructor: (model, options) => index_1.partials.constructor.apply(context, [model, options]),
        memberContainer: (model, options) => index_1.partials.memberContainer.apply(context, [model, options]),
        declaration: (model, options = {
            headingLevel: 2,
            nested: false,
        }) => index_1.partials.declaration.apply(context, [model, options]),
        declarationTitle: (model) => index_1.partials.declarationTitle.apply(context, [model]),
        documents: (model, options) => index_1.partials.documents.apply(context, [model, options]),
        enumMembersTable: (model) => index_1.partials.enumMembersTable.apply(context, [model]),
        hierarchy: (model, options) => index_1.partials.hierarchy.apply(context, [model, options]),
        indexSignature: (model) => index_1.partials.indexSignature.apply(context, [model]),
        inheritance: (model, options) => index_1.partials.inheritance.apply(context, [model, options]),
        memberTitle: (model, includeType = false) => index_1.partials.memberTitle.apply(context, [model, includeType]),
        /**
         * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
         */
        memberWithGroups: (model, options) => index_1.partials.memberWithGroups.apply(context, [model, options]),
        parametersList: (model) => index_1.partials.parametersList.apply(context, [model]),
        parametersTable: (model) => index_1.partials.parametersTable.apply(context, [model]),
        /**
     * Renders a collection of properties in a table.
    
    There is no association list partial for properties as these are handled as a standard list of members.
     */
        propertiesTable: (model, options) => index_1.partials.propertiesTable.apply(context, [model, options]),
        referenceMember: (model) => index_1.partials.referenceMember.apply(context, [model]),
        reflectionIndex: (model, options) => index_1.partials.reflectionIndex.apply(context, [model, options]),
        signature: (model, options) => index_1.partials.signature.apply(context, [model, options]),
        signatureParameters: (model) => index_1.partials.signatureParameters.apply(context, [model]),
        signatureReturns: (model, options) => index_1.partials.signatureReturns.apply(context, [model, options]),
        signatureTitle: (model, options) => index_1.partials.signatureTitle.apply(context, [model, options]),
        signatures: (model, options) => index_1.partials.signatures.apply(context, [model, options]),
        sources: (model, options) => index_1.partials.sources.apply(context, [model, options]),
        member: (model, options) => index_1.partials.member.apply(context, [model, options]),
        typeAndParent: (model) => index_1.partials.typeAndParent.apply(context, [model]),
        typeArguments: (model, options) => index_1.partials.typeArguments.apply(context, [model, options]),
        typeDeclaration: (model, options) => index_1.partials.typeDeclaration.apply(context, [model, options]),
        typeDeclarationList: (model, options) => index_1.partials.typeDeclarationList.apply(context, [model, options]),
        typeDeclarationTable: (model, options) => index_1.partials.typeDeclarationTable.apply(context, [model, options]),
        typeParametersList: (model) => index_1.partials.typeParametersList.apply(context, [model]),
        typeParametersTable: (model) => index_1.partials.typeParametersTable.apply(context, [model]),
        breadcrumbs: () => index_1.partials.breadcrumbs.apply(context, []),
        footer: () => index_1.partials.footer.apply(context, []),
        header: () => index_1.partials.header.apply(context, []),
        packagesIndex: (model) => index_1.partials.packagesIndex.apply(context, [model]),
        pageTitle: () => index_1.partials.pageTitle.apply(context, []),
        arrayType: (model) => index_1.partials.arrayType.apply(context, [model]),
        conditionalType: (model) => index_1.partials.conditionalType.apply(context, [model]),
        indexAccessType: (model) => index_1.partials.indexAccessType.apply(context, [model]),
        inferredType: (model) => index_1.partials.inferredType.apply(context, [model]),
        intersectionType: (model) => index_1.partials.intersectionType.apply(context, [model]),
        intrinsicType: (model) => index_1.partials.intrinsicType.apply(context, [model]),
        literalType: (model) => index_1.partials.literalType.apply(context, [model]),
        namedTupleType: (model) => index_1.partials.namedTupleType.apply(context, [model]),
        queryType: (model) => index_1.partials.queryType.apply(context, [model]),
        referenceType: (model) => index_1.partials.referenceType.apply(context, [model]),
        declarationType: (model) => index_1.partials.declarationType.apply(context, [model]),
        functionType: (model, options) => index_1.partials.functionType.apply(context, [model, options]),
        reflectionType: (model, options) => index_1.partials.reflectionType.apply(context, [model, options]),
        someType: (model) => index_1.partials.someType.apply(context, [model]),
        tupleType: (model) => index_1.partials.tupleType.apply(context, [model]),
        typeOperatorType: (model) => index_1.partials.typeOperatorType.apply(context, [model]),
        unionType: (model) => index_1.partials.unionType.apply(context, [model]),
        unknownType: (model) => index_1.partials.unknownType.apply(context, [model]),
    };
};
exports.resourcePartials = resourcePartials;
const resourceHelpers = (context) => {
    return {
        getAngleBracket: (bracket) => index_1.helpers.getAngleBracket.apply(context, [bracket]),
        getCommentParts: (model) => index_1.helpers.getCommentParts.apply(context, [model]),
        getDeclarationType: (model) => index_1.helpers.getDeclarationType.apply(context, [model]),
        getDescriptionForComment: (comment) => index_1.helpers.getDescriptionForComment.apply(context, [comment]),
        getFlattenedDeclarations: (model, options) => index_1.helpers.getFlattenedDeclarations.apply(context, [
            model,
            options,
        ]),
        getGroupIndexList: (children) => index_1.helpers.getGroupIndexList.apply(context, [children]),
        getGroupIndexTable: (children) => index_1.helpers.getGroupIndexTable.apply(context, [children]),
        getGroupIndex: (group) => index_1.helpers.getGroupIndex.apply(context, [group]),
        getHierarchyType: (model, options) => index_1.helpers.getHierarchyType.apply(context, [model, options]),
        getKeyword: (model) => index_1.helpers.getKeyword.apply(context, [model]),
        getModifier: (model) => index_1.helpers.getModifier.apply(context, [model]),
        getParameterDefaultValue: (model) => index_1.helpers.getParameterDefaultValue.apply(context, [model]),
        getProjectName: (stringWithPlaceholders, page) => index_1.helpers.getProjectName.apply(context, [
            stringWithPlaceholders,
            page,
        ]),
        getPropertyDefaultValue: (model) => index_1.helpers.getPropertyDefaultValue.apply(context, [model]),
        getReflectionFlags: (reflectionFlags) => index_1.helpers.getReflectionFlags.apply(context, [reflectionFlags]),
        getReturnType: (model) => index_1.helpers.getReturnType.apply(context, [model]),
        isGroupKind: (model) => index_1.helpers.isGroupKind.apply(context, [model]),
        useTableFormat: (key, reflectionKind) => index_1.helpers.useTableFormat.apply(context, [key, reflectionKind]),
    };
};
exports.resourceHelpers = resourceHelpers;
