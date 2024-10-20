"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberTitle = memberTitle;
const markdown_1 = require("../../../libs/markdown");
const utils_1 = require("../../../libs/utils");
const encode_angle_brackets_1 = require("../../../libs/utils/encode-angle-brackets");
const typedoc_1 = require("typedoc");
const type_some_1 = require("./type.some");
function memberTitle(model, includeType = false) {
    const md = [];
    const name = [];
    if (model?.kind === typedoc_1.ReflectionKind.Class && model.flags?.isAbstract) {
        name.push(this.helpers.getReflectionFlags(model.flags) + ' ');
    }
    const modelName = this.options.getValue('useHTMLEncodedBrackets')
        ? (0, encode_angle_brackets_1.encodeAngleBrackets)(model.name)
        : model.name;
    if (model.signatures?.length) {
        name.push(this.partials.signatureTitle(model.signatures[0], {
            includeType: true,
        }));
    }
    else {
        name.push(`${/\\/.test(model.name) ? (0, markdown_1.backTicks)(model.name) : (0, utils_1.escapeChars)(modelName)}`);
    }
    if (model.flags.isOptional) {
        name.push('?');
    }
    if (model.isDeprecated && model.isDeprecated()) {
        md.push((0, markdown_1.strikeThrough)(name.join('')));
    }
    else {
        md.push(name.join(''));
    }
    const type = model.type && includeType ? (0, markdown_1.backTicks)(type_some_1.someType.call(this, model.type)) : '';
    if (type) {
        md.push(type);
    }
    return md.join(': ');
}
