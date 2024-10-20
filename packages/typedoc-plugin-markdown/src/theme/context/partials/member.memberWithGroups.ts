/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { heading, unorderedList } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
 */
export function memberWithGroups(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (model.typeHierarchy?.next) {
    md.push(
      this.partials.hierarchy(model.typeHierarchy, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (model.implementedTypes?.length) {
    md.push(heading(options.headingLevel, this.i18n.theme_implements()));
    md.push(
      unorderedList(
        model.implementedTypes.map((implementedType) =>
          this.partials.someType(implementedType),
        ),
      ),
    );
  }

  if (model.kind === ReflectionKind.Class && model.categories?.length) {
    model.groups
      ?.filter((group) => group.title === this.i18n.kind_plural_constructor())
      .forEach((group) => {
        md.push(
          heading(options.headingLevel, this.i18n.kind_plural_constructor()),
        );
        group.children.forEach((child) => {
          md.push(
            this.partials.constructor(child as DeclarationReflection, {
              headingLevel: options.headingLevel + 1,
            }),
          );
        });
      });
  }

  if (
    model.documents ||
    model?.groups?.some((group) => group.allChildrenHaveOwnDocument())
  ) {
    const isAbsoluteIndex = model?.groups?.every(
      (group) => group.owningReflection.kind !== ReflectionKind.Document,
    );
    if (isAbsoluteIndex) {
      md.push(heading(options.headingLevel, this.i18n.theme_index()));
    }

    if (model.documents) {
      md.push(
        this.partials.documents(model, {
          headingLevel: options.headingLevel,
        }),
      );
    }

    md.push(
      this.partials.reflectionIndex(model, {
        headingLevel: isAbsoluteIndex
          ? options.headingLevel
          : options.headingLevel,
      }),
    );
  }

  md.push(this.partials.body(model, { headingLevel: options.headingLevel }));

  return md.join('\n\n');
}
