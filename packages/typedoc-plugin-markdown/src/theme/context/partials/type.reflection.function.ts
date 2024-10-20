import { MarkdownThemeContext } from '@plugin/theme';
import { SignatureReflection, SomeType } from 'typedoc';

export function functionType(
  this: MarkdownThemeContext,
  model: SignatureReflection[],
  options?: { forceParameterType: boolean },
): string {
  const functions = model.map((fn) => {
    const showParameterType =
      options?.forceParameterType || this.options.getValue('expandParameters');

    const params = fn.parameters
      ? fn.parameters.map((param) => {
          const paramType = this.partials.someType(param.type as SomeType);
          const paramItem = [
            `${param.flags.isRest ? '...' : ''}${param.name}${
              param.flags.isOptional ? '?' : ''
            }`,
          ];
          if (showParameterType) {
            paramItem.push(paramType);
          }
          return paramItem.join(': ');
        })
      : [];
    const returns = this.partials.someType(fn.type as SomeType);
    return `(${params.join(', ')}) => ${returns}`;
  });
  return functions.join('');
}
