import { Application, Options, OptionsReader } from 'typedoc';
import { declareOptions } from './options/options';
import { generateMarkdown, renderMarkdown } from './renderer/renderer';
import { MarkdownTheme } from './theme';

export function load(app: Application) {
  /**
   * Exposes markdown and bootstrap the markdown theme to the renderer
   */
  app.renderer.defineTheme('markdown', MarkdownTheme);

  app.options.addReader(
    new (class implements OptionsReader {
      name = 'markdown-theme';
      readonly order = 900;
      readonly supportsPackages = false;
      read(container: Options) {
        if (container.getValue('theme') === 'default') {
          container.setValue('theme', 'markdown');
        }
      }
    })(),
  );

  /**
   * Defines all plugin options
   */
  declareOptions(app);

  /**
   * Decouple HTML logic from the renderer (there should probably be a better solution to this)
   */
  Object.defineProperty(app, 'generateDocs', { value: generateMarkdown });
  Object.defineProperty(app.renderer, 'render', {
    value: renderMarkdown,
    configurable: true,
  });
}

/**
 * Expose global entrypoints
 */
export * from './models';
export * from './options/options-reader';
export { MarkdownRendererEvent } from './renderer/renderer';
export { partials } from './resources/resources';
export { MarkdownTheme } from './theme';
export { MarkdownThemeRenderContext } from './theme-render-context';
