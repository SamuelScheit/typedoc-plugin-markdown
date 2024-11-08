/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import {
  ContainerReflection,
  DeclarationReflection,
  DocumentReflection,
  ProjectReflection,
} from 'typedoc';

export function documents(
  this: MarkdownThemeContext,
  model: ProjectReflection | DeclarationReflection | ContainerReflection,
  options: { headingLevel: number },
): string {
  return 'documents';
  const md: string[] = [];
  const docGroups = model.groups?.filter(
    (group) => group.owningReflection instanceof DocumentReflection,
  );
  if (docGroups?.length) {
    docGroups.forEach((reflectionGroup) => {
      md.push(heading(options.headingLevel, reflectionGroup.title));
      docGroups.forEach((reflectionGroup) => {
        md.push(this.helpers.getGroupIndex(reflectionGroup));
      });
    });
  }
  return md.join('\n\n');
}
