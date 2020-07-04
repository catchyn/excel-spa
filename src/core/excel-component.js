import { DomListener } from './dom-listener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name;
  }

  // Возвращает шаблон элемента
  toHtml() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  destroy(eventNames) {
    this.removeDomListeners(eventNames);
  }
}
