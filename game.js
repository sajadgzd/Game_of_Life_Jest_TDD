const isAlive = (cell, neighbours) =>
  (neighbours === 3 || cell && neighbours == 2)? 1 : 0

const generate = (root) => new Array(root * root).fill(0)

const regenerate = cells => cells.map(cell => isAlive(cell, 0))

window.game = {
  isAlive,
  generate,
  regenerate
};
