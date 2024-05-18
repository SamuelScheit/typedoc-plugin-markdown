import { backTicks, htmlTable, table } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeDeclarationTable(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
): string {
  const tableColumnsOptions = this.options.getValue('tableColumns');

  const headers: string[] = [];

  const declarations = this.helpers.getFlattenedDeclarations(model, {
    includeSignatures: true,
  });

  const hasComments = declarations.some((declaration) =>
    Boolean(declaration.comment),
  );

  const hasDefaultValues = declarations.some((declaration) =>
    Boolean(declaration.defaultValue),
  );

  headers.push(this.i18n.theme_member());

  headers.push(this.i18n.theme_type());

  if (hasDefaultValues) {
    headers.push(this.i18n.theme_value());
  }

  if (hasComments) {
    headers.push(this.i18n.theme_description());
  }

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection, index: number) => {
    const row: string[] = [];

    row.push(backTicks(declaration.name));

    row.push(this.partials.someType(declaration.type));

    if (hasDefaultValues) {
      row.push(
        escapeChars(!declaration.defaultValue ? '-' : declaration.defaultValue),
      );
    }

    if (hasComments) {
      const comments = declaration.comment;

      if (comments) {
        row.push(this.partials.comment(comments, { isTableColumn: true }));
      } else {
        row.push('-');
      }
    }

    rows.push(row);
  });

  return this.options.getValue('typeDeclarationFormat') == 'table'
    ? table(headers, rows, tableColumnsOptions.leftAlignHeadings)
    : htmlTable(headers, rows, tableColumnsOptions.leftAlignHeadings);
}
