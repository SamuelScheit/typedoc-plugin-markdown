import { link } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ReferenceType } from 'typedoc';

export function referenceType(
  this: MarkdownThemeContext,
  model: ReferenceType,
): string {
  if (model.reflection || (model.name && model.typeArguments)) {
    const reflection: string[] = [];

    let base = model.reflection?.name || model.name;

    if (model.typeArguments && model.typeArguments.length) {
      base += this.partials.typeArguments(model.typeArguments);
    }

    if (model.reflection?.url) {
      reflection.push(link(base, this.getRelativeUrl(model.reflection.url)));
    } else {
      reflection.push(model.externalUrl ? link(base, model.externalUrl) : base);
    }
    return reflection.join('');
  }
  return model.externalUrl ? link(model.name, model.externalUrl) : model.name;
}
