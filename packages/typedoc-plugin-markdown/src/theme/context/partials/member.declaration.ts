/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import {
  DeclarationReflection,
  IntersectionType,
  ReferenceType,
  ReflectionType,
} from 'typedoc';

export function declaration(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: {
    headingLevel: number;
    nested?: boolean;
  } = {
    headingLevel: 2,
    nested: false,
  },
): string {
  const md: string[] = [];

  const opts = {
    nested: false,
    ...options,
  };

  if (model?.documents) {
    md.push(
      this.partials.documents(model, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  const typeDeclaration = (model.type as any)
    ?.declaration as DeclarationReflection;

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: opts.headingLevel,
        showSummary: true,
        showTags: false,
      }),
    );
  }

  if (model.type instanceof IntersectionType) {
    model.type?.types?.forEach((intersectionType) => {
      if (
        intersectionType instanceof ReflectionType &&
        !intersectionType.declaration.signatures
      ) {
        if (intersectionType.declaration.children) {
          md.push(
            this.partials.typeDeclaration(intersectionType.declaration, {
              headingLevel: opts.headingLevel,
            }),
          );
        }
      }
    });
  }

  if (model.type instanceof ReferenceType && model.type.typeArguments?.length) {
    if (model.type.typeArguments[0] instanceof ReflectionType) {
      if (model.type.typeArguments[0].declaration?.children) {
        // md.push(heading(opts.headingLevel, this.i18n.theme_type_declaration()));
        md.push(
          this.partials.typeDeclaration(
            model.type.typeArguments[0].declaration,
            { headingLevel: opts.headingLevel },
          ),
        );
      }
    }
  }

  if (typeDeclaration) {
    if (typeDeclaration?.indexSignatures?.length) {
      md.push(heading(opts.headingLevel, this.i18n.kind_index_signature()));
      typeDeclaration?.indexSignatures?.forEach((indexSignature) => {
        md.push(this.partials.indexSignature(indexSignature));
      });
    }

    if (typeDeclaration?.signatures?.length) {
      typeDeclaration.signatures.forEach((signature) => {
        md.push(
          this.partials.signature(signature, {
            headingLevel: opts.headingLevel,
            nested: true,
          }),
        );
      });
    }

    if (typeDeclaration?.children?.length) {
      if (!opts.nested && typeDeclaration?.children?.length) {
        if (typeDeclaration.categories) {
          typeDeclaration.categories.forEach((category) => {
            md.push(
              this.partials.typeDeclaration(
                category as unknown as DeclarationReflection,
                {
                  headingLevel: opts.headingLevel,
                },
              ),
            );
          });
        } else {
          md.push(
            this.partials.typeDeclaration(typeDeclaration, {
              headingLevel: opts.headingLevel,
            }),
          );
        }
      }
    }
  }

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: opts.headingLevel,
        showSummary: false,
        showTags: true,
        showReturns: true,
      }),
    );
  }

  md.push(
    this.partials.inheritance(model, { headingLevel: opts.headingLevel }),
  );

  if (
    !opts.nested &&
    model.sources &&
    !this.options.getValue('disableSources')
  ) {
    md.push(this.partials.sources(model, { headingLevel: opts.headingLevel }));
  }

  return md.join('\n\n');
}
