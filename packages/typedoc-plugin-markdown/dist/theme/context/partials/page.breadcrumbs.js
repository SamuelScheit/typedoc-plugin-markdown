"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.breadcrumbs = breadcrumbs;
const markdown_1 = require("../../../libs/markdown");
const utils_1 = require("../../../libs/utils");
const path = __importStar(require("path"));
function breadcrumbs() {
    const md = [];
    const textContentMappings = this.options.getValue('textContentMappings');
    const fileExtension = this.options.getValue('fileExtension');
    const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;
    if (this.page.url === this.page.project.url ||
        ((this.page.url === entryFileName || this.page.url === 'readme_.md') &&
            this.page.url.split(path.sep).length === 1)) {
        return '';
    }
    const homeLabel = this.helpers.getProjectName(textContentMappings['breadcrumbs.home'], this.page);
    md.push((0, markdown_1.link)(homeLabel, this.getRelativeUrl(this.page?.project?.url || entryFileName)));
    const breadcrumb = (model) => {
        if (model?.parent?.parent) {
            breadcrumb(model.parent);
        }
        const getUrl = (model) => {
            if (model.readme) {
                return `${path.dirname(model.url)}/${entryFileName}`;
            }
            return model.url;
        };
        if (model.name !== this.options.getValue('entryModule')) {
            md.push((0, markdown_1.link)((0, utils_1.escapeChars)(model.name), this.getRelativeUrl(getUrl(model))));
        }
    };
    const pageName = (0, utils_1.escapeChars)(this.page.model.name);
    if (this.page.model?.parent?.parent &&
        (this.page.url !== this.page.project.url || this.page.url !== entryFileName)) {
        breadcrumb(this.page.model.parent);
    }
    md.push(pageName);
    return md.length > 1 ? `${md.join(' / ')}` : '';
}
