/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { MarkdownThemeContext } from 'theme';
import { SignatureReflection } from 'typedoc';

export function signature(
  this: MarkdownThemeContext,
  model: SignatureReflection,
  options: {
    headingLevel: number;
    nested?: boolean;
    accessor?: string;
    multipleSignatures?: boolean;
  },
): string {
  const md: string[] = [];

  let modelComments = model.comment || model.parent?.comment;

  if (
    modelComments &&
    model.parent?.comment?.summary &&
    !options.multipleSignatures
  ) {
    modelComments = Object.assign(modelComments, {
      summary: model.parent.comment.summary,
    });
  }
  if (modelComments && model.parent?.comment?.blockTags) {
    modelComments.blockTags = [
      ...(model.parent?.comment?.blockTags || []),
      ...(model.comment?.blockTags || []),
    ];
  }

  if (modelComments) {
    md.push(
      this.partials.comment(modelComments, {
        headingLevel: options.headingLevel,
        showTags: false,
        showSummary: true,
      }),
    );
  }

  if (!options.multipleSignatures && model.parent?.documents) {
    md.push(
      this.partials.documents(model?.parent, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (modelComments) {
    md.push(
      this.partials.comment(modelComments, {
        headingLevel: options.headingLevel,
        showTags: true,
        showSummary: false,
      }),
    );
  }

  md.push(
    this.partials.inheritance(model, { headingLevel: options.headingLevel }),
  );

  if (
    !options.nested &&
    model.sources &&
    !this.options.getValue('disableSources')
  ) {
    md.push(
      this.partials.sources(model, { headingLevel: options.headingLevel }),
    );
  }

  return md.join('\n\n');
}
