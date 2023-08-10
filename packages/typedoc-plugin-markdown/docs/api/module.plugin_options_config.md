[**typedoc-plugin-markdown - v4.0.0-next.13**](README.md)

---

[typedoc-plugin-markdown](README.md) > plugin/options/config

# plugin/options/config

## Other

### flattenOutputFiles

```ts
const flattenOutputFiles: DeclarationOption;
```

This creates a flat folder structure without any folders - a required format for some Wikis.

![flattenOutputFiles folders](../images/options/flattenOutputFiles.png)

---

### entryFileName

```ts
const entryFileName: DeclarationOption;
```

`README.md` is recognised when browsing folders on repos and Wikis. `index.md` might be better if published as a web site.

Note the content of this file is either the API entry / index page, or the project readme (dependant on if a readme file is resolved or not).

a. If a readme file is resolved then two root files are generated:

├── {entryFileName} - (the project readme file)
├── API.md - (API index page)

b. If a readme file is NOT resolved, then the index page becomes the entryFileName page.

├── {entryFileName} - (API index page)

---

### indexFileName

```ts
const indexFileName: DeclarationOption;
```

This page either contains the module index or exported symbols depending on the given `entryPoints`.

This page may not be required (if navigation is present for example) and can be skipped. See `skipIndexPage`.

This option is ignored if `readme=none` or `skipIndexPage=true`.

---

### indexPageTitle

```ts
const indexPageTitle: DeclarationOption;
```

If not defined then the project name / version will be printed.

---

### skipIndexPage

```ts
const skipIndexPage: DeclarationOption;
```

This option skips the generation of the index page if it is not required.

Please note this option will be ignored if a single entryPoint is defined as it will contain exported symbols.

---

### excludeGroups

```ts
const excludeGroups: DeclarationOption;
```

By default members are grouped by kind (eg Classes, Functions etc).

This creates a flat structure where all members are displayed at the same level.

**With groups**

```markdown
# SomeModule

## Classes

### ClassA

## Functions

### FunctionA
```

**Without groups**

```markdown
# SomeModule

## ClassA

## FunctionA
```

---

### hidePageHeader

```ts
const hidePageHeader: DeclarationOption;
```

---

### hidePageTitle

```ts
const hidePageTitle: DeclarationOption;
```

---

### hideKindPrefix

```ts
const hideKindPrefix: DeclarationOption;
```

---

### hideBreadcrumbs

```ts
const hideBreadcrumbs: DeclarationOption;
```

---

### hideInPageTOC

```ts
const hideInPageTOC: DeclarationOption;
```

---

### hideHierarchy

```ts
const hideHierarchy: DeclarationOption;
```

---

### identifiersAsCodeBlocks

```ts
const identifiersAsCodeBlocks: DeclarationOption;
```

Note if `true` references will not be linked.

---

### propertiesFormat

```ts
const propertiesFormat: DeclarationOption;
```

---

### enumMembersFormat

```ts
const enumMembersFormat: DeclarationOption;
```

---

### typeDeclarationFormat

```ts
const typeDeclarationFormat: DeclarationOption;
```

---

### tocFormat

```ts
const tocFormat: DeclarationOption;
```

---

### baseUrl

```ts
const baseUrl: DeclarationOption;
```

---

### anchorFormat

```ts
const anchorFormat: DeclarationOption;
```

---

### anchorPattern

```ts
const anchorPattern: DeclarationOption;
```

e.g customprefix-{{anchor}}

An example use-case is for bitbucket cloud that would use the option

```
anchorPattern: 'markdown-header-{{anchor}}'
```

---

### namedAnchors

```ts
const namedAnchors: DeclarationOption;
```

## fileOutput

### outputFileStrategy

```ts
const outputFileStrategy: DeclarationOption;
```

TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. https://typedoc.org/guides/options/#entrypointstrategy.

This options aims to provide some flexibility as to how files can be generated.

**"members"**

Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.

![outputFileStrategy members folders](../images/options/outputFileStrategy-members.png)

**"modules"**

Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.

![outputFileStrategy modules folders](../images/options/outputFileStrategy-modules.png)

---

### includeFileNumberPrefixes

```ts
const includeFileNumberPrefixes: DeclarationOption;
```

This makes files and folders appear in the file system in the same order as they are sorted. This is useful where auto sidebar generation may be required.

![includeFileNumberPrefixes folders](../images/options/includeFileNumberPrefixes.png)