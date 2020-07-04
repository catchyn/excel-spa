const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return /*html*/ `
  <div class="cell" contenteditable="true"></div>
`;
}

function toColumn(col) {
  return /*html*/ `
        <div class="column">
            ${col}
        </div>
    `;
}

function createRow(content, info = '') {
  return /*html*/ `
        <div class="row">
            <div class="row-info">${info}</div>
            <div class="row-data">${content}</div>
        </div>    
    `;
}

function addHeaderRow(rows, colsCount) {
  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('');
  rows.push(createRow(cols));
}

function addMainRow(rows, colsCount, rowsCount) {
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(toCell).join('');
    rows.push(createRow(cells, i + 1));
  }
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  addHeaderRow(rows, colsCount);
  addMainRow(rows, colsCount, rowsCount);

  return rows.join('');
}
