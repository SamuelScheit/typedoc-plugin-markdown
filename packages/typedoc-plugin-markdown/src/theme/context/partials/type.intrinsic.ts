import { MarkdownThemeContext } from 'theme';
import { IntrinsicType } from 'typedoc';

export function intrinsicType(
  this: MarkdownThemeContext,
  model: IntrinsicType,
): string {
  return model.name;
}
