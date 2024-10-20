import { MarkdownThemeContext } from 'theme';
import { ParameterReflection, SomeType } from 'typedoc';
import { backTicks } from '../../../libs/markdown';

export function signatureParameters(
  this: MarkdownThemeContext,
  model: ParameterReflection[],
) {
  const format = this.options.getValue('useCodeBlocks');
  const firstOptionalParamIndex = model.findIndex(
    (parameter) => parameter.flags.isOptional,
  );
  return (
    '(' +
    backTicks(
      model
        .map((param, i) => {
          const paramsmd: string[] = [];
          if (param.flags.isRest) {
            paramsmd.push('...');
          }
          const paramType = this.partials.someType(param.type as SomeType);
          // const showParamType = this.options.getValue('expandParameters');
          const paramItem = [
            `${paramType}${
              param.flags.isOptional ||
              (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex)
                ? '?'
                : ''
            }`,
          ];
          paramsmd.push(
            `${format && model.length > 2 ? `\n   ` : ''}${paramItem.join(': ')}`,
          );
          return paramsmd.join('');
        })
        .join(`, `),
    ) +
    ')'
  );
}
