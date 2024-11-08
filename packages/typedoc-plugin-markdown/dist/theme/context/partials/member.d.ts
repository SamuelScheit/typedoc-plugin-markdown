import { MarkdownThemeContext } from '../../../theme';
import { DeclarationReflection } from 'typedoc';
export declare function member(this: MarkdownThemeContext, model: DeclarationReflection, options: {
    headingLevel: number;
    nested?: boolean;
}): string;