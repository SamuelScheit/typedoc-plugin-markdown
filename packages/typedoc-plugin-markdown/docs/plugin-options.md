# Plugin Options

This document describes all the additional options exposed by the plugin.

## Contents

* [File output options](#file-output-options)
  * [`--outputFileStrategy`](#--outputfilestrategy)
  * [`--membersWithOwnFile`](#--memberswithownfile)
  * [`--entryFileName`](#--entryfilename)
  * [`--entryModule`](#--entrymodule)
  * [`--mergeReadme`](#--mergereadme)
* [Structure and formatting options](#structure-and-formatting-options)
  * [`--hidePageHeader`](#--hidepageheader)
  * [`--hidePageTitle`](#--hidepagetitle)
  * [`--hideBreadcrumbs`](#--hidebreadcrumbs)
  * [`--hideInPageTOC`](#--hideinpagetoc)
  * [`--indexPageTitle`](#--indexpagetitle)
  * [`--memberPageTitle`](#--memberpagetitle)
  * [`--excludeGroups`](#--excludegroups)
  * [`--useCodeBlocks`](#--usecodeblocks)
  * [`--expandObjects`](#--expandobjects)
  * [`--parametersFormat`](#--parametersformat)
  * [`--propertiesFormat`](#--propertiesformat)
  * [`--enumMembersFormat`](#--enummembersformat)
  * [`--typeDeclarationFormat`](#--typedeclarationformat)
  * [`--indexFormat`](#--indexformat)
* [Utility options](#utility-options)
  * [`--preserveAnchorCasing`](#--preserveanchorcasing)
  * [`--anchorPrefix`](#--anchorprefix)
  * [`--namedAnchors`](#--namedanchors)
  * [`--publicPath`](#--publicpath)

## File output options

Options that configure how files are generated.

### `--outputFileStrategy`

Determines how output files are generated. Defaults to `"members"`.

```shell
--outputFileStrategy <"members"|"modules">
```

#### Usage

TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. https://typedoc.org/guides/options/#entrypointstrategy.

This options aims to provide some flexibility as to how files can be generated.

**`members`**

Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.

It is also possible to further refine what members are exported to individual files with the [`--membersWithOwnFile`](#membersWithOwnFile) option.

**`modules`**

Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.

[↑ Top](#options-guide)

***

### `--membersWithOwnFile`

Determines which members are exported to their own file. Ignored when `outputFileStrategy` = `modules`. Defaults to `['Enum', 'Variable', 'Function', 'Class', 'Interface', 'TypeAlias']`.

```shell
--membersWithOwnFile Array<
    ['Enum' | 'Variable' | 'Function' | 'Class' | 'Interface' | 'TypeAlias']
  >
```

#### Usage

To export only Interfaces, classes and enums to their own file, the option should be configured in an options file as follows:

```js
{
  membersWithOwnFile: ['Interface', 'Class', 'Enum']
}
```

[↑ Top](#options-guide)

***

### `--entryFileName`

The file name of the entry page. Defaults to `"index.md"`.

```shell
--entryFileName <string>
```

#### Usage

The entry page in this context is the reference to the file that acts as a root page for the documentation, equivalent to `index.html` for web pages.

`index.md` is the default, however `README.md` is recognised when browsing folders on repos and Wikis.

The content of this file is one of the following:

a) The [`--entryModule`](#--entrymodule) (if set).
b) The resolved Readme file.
c) The documentation index page (if readme = none).

[↑ Top](#options-guide)

***

### `--entryModule`

The name of a module that should act as the root page for documentation. Defaults to `"undefined"`.

```shell
--entryModule <string>
```

#### Usage

If set the name of the file will be determined by the value of [`--entryFileName`](#--entryfilename).

This is only applicable when multiple modules are resolved.

[↑ Top](#options-guide)

***

### `--mergeReadme`

Merges the resolved readme into the project index page. Defaults to `false`.

```shell
--mergeReadme <boolean>
```

#### Usage

By default when a readme file is resolved, a seperate Readme page is created. This option prepends the readme contents into the index page.

* This option has no effect when `readme` is set to `none`.
* When set to `true`, `--indexPageTitle` is ignored.

[↑ Top](#options-guide)

***

## Structure and formatting options

Options that alter the format and structure of pages.

### `--hidePageHeader`

Do not print page header. Defaults to `false`.

```shell
--hidePageHeader <boolean>
```

[↑ Top](#options-guide)

***

### `--hidePageTitle`

Do not print page title. Defaults to `false`.

```shell
--hidePageTitle <boolean>
```

[↑ Top](#options-guide)

***

### `--hideBreadcrumbs`

Do not print breadcrumbs. Defaults to `false`.

```shell
--hideBreadcrumbs <boolean>
```

[↑ Top](#options-guide)

***

### `--hideInPageTOC`

Do not render in-page TOC items. Defaults to `false`.

```shell
--hideInPageTOC <boolean>
```

[↑ Top](#options-guide)

***

### `--indexPageTitle`

The title of project index page. Defaults to `"{projectName}"`.

```shell
--indexPageTitle <string>
```

#### Usage

Provides a mechanism to change the main project index page title.

Defaults to `{projectName}` - a placeholder that renders the project name and version (when `--includeVersion` is set).

[↑ Top](#options-guide)

***

### `--memberPageTitle`

The page title of members. Defaults to `"{kind}: {name}"`.

```shell
--memberPageTitle <string>
```

#### Usage

Provides a mechanism to change the page title of members.

Supports `{name}` and `{kind}` placeholders.

e.g "Class: MyClassName"

For example to display member name only:

```json
memberPageTitle: "{name}"
```

[↑ Top](#options-guide)

***

### `--excludeGroups`

Excludes grouping by reflection kind so all members are rendered and sorted at the same level. Defaults to `false`.

```shell
--excludeGroups <boolean>
```

#### Usage

By default members are grouped by kind (eg Classes, Functions etc).

This creates a flat structure where all members are displayed at the same heading level.

[↑ Top](#options-guide)

***

### `--useCodeBlocks`

Wraps signatures and declarations in code blocks. Defaults to `false`.

```shell
--useCodeBlocks <boolean>
```

#### Usage

This option can be used to improve readability and aesthetics when defining signatures and declarations.

Please note that when this option is set to `true` it is not possible to link to other references.

As a work around the `{\@link}` tag can be be used to manually reference types.

[↑ Top](#options-guide)

***

### `--expandObjects`

Expand objects inside declarations. Defaults to `false`.

```shell
--expandObjects <boolean>
```

#### Usage

By default objects inside declaration are collapsed to preserve space and improve readability.

*Default example:*

`object`

*Expanded example:*

{ `x`: `string` }

[↑ Top](#options-guide)

***

### `--parametersFormat`

Specify the render style of parameter and type parameter groups. Defaults to `"list"`.

```shell
--parametersFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--propertiesFormat`

Specify the render style of property groups for interfaces and classes. Defaults to `"list"`.

```shell
--propertiesFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--enumMembersFormat`

Specify the render style of enumuration members. Defaults to `"list"`.

```shell
--enumMembersFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--typeDeclarationFormat`

Specify the render style for type declaration members. Defaults to `"list"`.

```shell
--typeDeclarationFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--indexFormat`

Specify the render format for index items. Defaults to `"list"`.

```shell
--indexFormat <"list"|"table">
```

#### Usage

This determines wheter to display index items either as a simple lists or in a table with a description column exposing the comment summary.

[↑ Top](#options-guide)

***

## Utility options

Options that configure additional functionality.

### `--preserveAnchorCasing`

Preserve anchor casing when generating links. Defaults to `false`.

```shell
--preserveAnchorCasing <boolean>
```

[↑ Top](#options-guide)

***

### `--anchorPrefix`

Custom anchor prefix Defaults to `"undefined"`.

```shell
--anchorPrefix <string>
```

[↑ Top](#options-guide)

***

### `--namedAnchors`

Use HTML named anchor tags for internal anchor links. Defaults to `{"headings":false,"tableRows":false}`.

```shell
--namedAnchors <{"headings": boolean}, {"tableRows": boolean}>
```

#### Usage

Internal anchor links are used when referencing symbols with in-page table of contents or when referenced with  by {@link} tags.

There are two flags exposed by this option:

* `headings` - Add HTML named anchors to heading for implementations that do not assign header ids.
* `tableRows` - Add anchors to table rows when table formats are selected and no heading elements are present.

[↑ Top](#options-guide)

***

### `--publicPath`

Specify the base path for all urls. If undefined urls will be relative. Defaults to `"undefined"`.

```shell
--publicPath <string>
```

[↑ Top](#options-guide)

***
