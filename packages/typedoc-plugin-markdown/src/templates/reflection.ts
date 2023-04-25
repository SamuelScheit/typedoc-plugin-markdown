import { DeclarationReflection, PageEvent, ReflectionKind } from 'typedoc';
import { backTicks, bold, heading } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  if (context.getOption('enableFrontmatter')) {
    md.push(context.partials.frontmatter(page));
  }

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (page.model.readme) {
    md.push(
      context.partials
        .commentParts(page.model.readme)
        .replace('[TYPEDOC_INDEX]', context.partials.toc(page.model)),
    );
  } else {
    if (!context.getOption('hidePageTitle')) {
      md.push(heading(1, context.partials.pageTitle(page)));
    }

    if (
      !context.getOption('hideKindTag') &&
      !page.model.kindOf([ReflectionKind.Module, ReflectionKind.Namespace])
    ) {
      md.push(bold(backTicks(ReflectionKind.singularString(page.model.kind))));
    }

    md.push(context.partials.reflectionMember(page.model));
  }
  return md.join('\n\n');
}