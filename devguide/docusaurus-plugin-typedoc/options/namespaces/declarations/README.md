[Home](../../../../README.md) / [docusaurus-plugin-typedoc](../../../README.md) / [options](../../README.md) / declarations

# declarations

## sidebar

> `const` **sidebar**: `object`

**sidebar.autoConfiguration**

Set to `false` to disable sidebar generation. Defaults to `true`.

**sidebar.pretty**

Pretty format the sidebar JSON.

Please see the [sidebar guide](/plugins/docusaurus/guide/sidebar) for additional information on sidebar setup.

### Type declaration

| Name                             | Type            | Default value                                      |
| -------------------------------- | --------------- | -------------------------------------------------- |
| `help`                           | `string`        | 'Configures the autogenerated Docusaurus sidebar.' |
| `type`                           | `ParameterType` | ParameterType.Mixed                                |
| `defaultValue`                   | `object`        | DEFAULT\_SIDEBAR\_OPTIONS                          |
| `defaultValue.autoConfiguration` | `boolean`       | true                                               |
| `defaultValue.pretty`            | `boolean`       | false                                              |

### Defined in

[docusaurus-plugin-typedoc/src/options/declarations.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/docusaurus-plugin-typedoc/src/options/declarations.ts#L16)