import { ExcelComponent } from '../../core/excel-component';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHtml() {
    return /*html*/ `
      <div class="info">fx</div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('input', event.target.textContent.trim());
    this.destroy();
  }
  onClick(event) {
    console.log('click', event.target.textContent.trim());
  }
}
