import { $ } from '../../core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const domRoot = $.create('div', 'excel');

    this.components = this.components.map((Component) => {
      const domEl = $.create('div', Component.className);
      const component = new Component(domEl);
      domEl.html(component.toHtml());
      domRoot.append(domEl);
      return component;
    });
    return domRoot;
  }

  render() {
    this.$el.append(this.getRoot().$el);

    this.components.forEach((component) => component.init());
  }
}
