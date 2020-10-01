import { App, Component } from 'vue';
import Book from './Book';

/**
 * Load a component.
 * @param {object} app
 * @param {string} Component name
 * @param {object} Component definition
 */
export const registerComponent = (app: App, name: string, def: Component): void => {
  if (app && name && def) {
    app.component(name, def);
  }
};

/**
 * Load a group of components.
 * @param {object} app
 * @param {object} Object of component definitions
 */
export const registerComponents = (app: App, components: Record<string, Component> = {}): void => {
  Object.keys(components).forEach(key => {
    registerComponent(app, key, components[key]);
  });
};

export { default as BananaVue3Book, style as BananaVue3BookStyle } from './Book';
export default {
  install: (app: App): void => {
    registerComponents(app, {
      'banana-vue3-book': Book
    });
  }
};
