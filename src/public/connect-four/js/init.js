import { createElementNS } from '../../utils.js';

export function setupBoard(canvas, {
  columns,
  rows,
  width = window.innerWidth,
  height = window.innerHeight
}) {

  const boardSideLength = Math.min(width, height) * 0.8;

  canvas.setAttribute('width', boardSideLength);
  canvas.setAttribute('height', boardSideLength);

  console.log(`Board size: ${columns}x${rows}`);

  const board = createElementNS('rect');

  board.setAttribute('id', 'board');
  board.setAttribute('x', 0);
  board.setAttribute('y', 0);
  board.setAttribute('width', boardSideLength);
  board.setAttribute('height', boardSideLength);

  canvas.appendChild(board);
}
