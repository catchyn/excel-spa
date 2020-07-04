import { ExcelComponent } from '../../core/excel-component';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHtml() {
    return /*html*/`
    <input type="text" class="input" value="Новая таблица" />

    <div class="">
      <div class="button">
        <i class="material-icons">delete</i>
      </div>

      <div class="button">
        <i class="material-icons">exit_to_app</i>
      </div>
    </div>
    `;
  }
}
