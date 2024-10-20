"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeChars = escapeChars;
exports.unescapeChars = unescapeChars;
exports.wrapBackTicks = wrapBackTicks;
function escapeChars(str) {
    return str
        .replace(/>/g, '\\>')
        .replace(/</g, '\\<')
        .replace(/{/g, '\\{')
        .replace(/}/g, '\\}')
        .replace(/_/g, '\\_')
        .replace(/`/g, '\\`')
        .replace(/\|/g, '\\|')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\*/g, '\\*');
}
function unescapeChars(str) {
    return str
        .replace(/\\>/g, '>')
        .replace(/\\</g, '<')
        .replace(/\\{/g, '{')
        .replace(/\\}/g, '}')
        .replace(/\\_/g, '_')
        .replace(/\\`/g, '`')
        .replace(/\\\|/g, '|')
        .replace(/\\\[/g, '[')
        .replace(/\\\]/g, ']')
        .replace(/\\\*/g, '*');
}
function wrapBackTicks(str) {
    return unescapeChars(str).replace(/`/g, '');
}
