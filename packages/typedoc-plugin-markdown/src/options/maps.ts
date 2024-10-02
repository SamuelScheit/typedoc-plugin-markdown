/**
 * Maps a given value to the option type.
 *
 * @module
 */

/**
 * The allowed values of the `--outputFileStrategy` option.
 */
export enum OutputFileStrategy {
  Categories = 'categories',
  Members = 'members',
  Modules = 'modules',
}

/**
 * The allowed values for formatting reflections and indexes.
 */
export enum DisplayFormat {
  List = 'list',
  Table = 'table',
  HtmlTable = 'htmlTable',
}
