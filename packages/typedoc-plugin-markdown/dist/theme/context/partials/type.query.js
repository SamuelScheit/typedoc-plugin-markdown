"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryType = queryType;
function queryType(model) {
    return `${'typeof'} ${this.partials.someType(model.queryType)}`;
}
