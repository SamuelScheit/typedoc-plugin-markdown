import { MarkdownThemeContext } from 'theme';
import { QueryType } from 'typedoc';

export function queryType(
  this: MarkdownThemeContext,
  model: QueryType,
): string {
  return `${'typeof'} ${this.partials.someType(model.queryType)}`;
}
