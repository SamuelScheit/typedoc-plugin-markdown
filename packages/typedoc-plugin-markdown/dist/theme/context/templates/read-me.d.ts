import { MarkdownPageEvent } from '../../../events';
import { MarkdownThemeContext } from '../../../theme';
import { ProjectReflection } from 'typedoc';
/**
 * Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.
 */
export declare function readme(this: MarkdownThemeContext, page: MarkdownPageEvent<ProjectReflection>): string;
