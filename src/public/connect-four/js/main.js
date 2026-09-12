import { setupBoard } from './init.js';

const COLUMNS = 7;
const ROWS = 6;

setupBoard(document.getElementById('canvas'), {
  columns: COLUMNS,
  rows: ROWS
});
