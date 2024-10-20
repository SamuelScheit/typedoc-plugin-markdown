export function escapeChars(str: string) {
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

export function unescapeChars(str: string) {
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

export function wrapBackTicks(str: string) {
  return unescapeChars(str).replace(/`/g, '');
}
