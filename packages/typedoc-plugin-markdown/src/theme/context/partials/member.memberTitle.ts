import { backTicks, strikeThrough } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { encodeAngleBrackets } from '@plugin/libs/utils/encode-angle-brackets';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { someType } from './type.some';

export function memberTitle(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  includeType = false,
): string {
  const md: string[] = [];
  const name: string[] = [];

  if (model?.kind === ReflectionKind.Class && model.flags?.isAbstract) {
    name.push(this.helpers.getReflectionFlags(model.flags) + ' ');
  }

  const modelName = this.options.getValue('useHTMLEncodedBrackets')
    ? encodeAngleBrackets(model.name)
    : model.name;

  if (model.signatures?.length) {
    name.push(
      this.partials.signatureTitle(model.signatures[0], {
        includeType: true,
      }),
    );
  } else {
    name.push(
      `${/\\/.test(model.name) ? backTicks(model.name) : escapeChars(modelName)}`,
    );
  }

  if (model.flags.isOptional) {
    name.push('?');
  }

  if (model.isDeprecated && model.isDeprecated()) {
    md.push(strikeThrough(name.join('')));
  } else {
    md.push(name.join(''));
  }

  const type =
    model.type && includeType ? backTicks(someType.call(this, model.type)) : '';
  if (type) {
    md.push(type);
  }

  return md.join(': ');
}
