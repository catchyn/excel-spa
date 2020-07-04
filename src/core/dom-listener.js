import camelCase from 'lodash/camelCase';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('NO ROOT PROVIDER DOM LISTER');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
          `Не реализован метод ${method} в компоненте ${this.name || ''}`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function getMethodName(eventName) {
  return camelCase('on ' + eventName);
}
