import { ExcelComponent } from '../../core/excel-component';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHtml() {
    return /*html*/ `
      <div class="row">
        <div class="row-info"></div>
        <div class="row-data">
          <div class="column">
            A
          </div>
          <div class="column">
            B
          </div>
          <div class="column">
            C
          </div>
        </div>
      </div>

      <div class="row">
        <div class="row-info">1</div>
        <div class="row-data">
          <div class="cell" contenteditable="true">as</div>
          <div class="cell" contenteditable="true">er</div>
          <div class="cell" contenteditable="true">er</div>
        </div>
      </div>

      <div class="row">
        <div class="row-info">2</div>
        <div class="row-data">
          <div class="cell" contenteditable="true">DD</div>
          <div class="cell" contenteditable="true">EE</div>
          <div class="cell" contenteditable="true">DD</div>
        </div>
      </div>
    `;
  }
}
