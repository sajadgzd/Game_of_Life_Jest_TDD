const isAlive = (cell, neighbours) =>
  (neighbours === 3 || cell && neighbours == 2)? 1 : 0

const generate = (root) => new Array(root * root).fill(0)

const add = (...args) => {
  return args.reduce((accumulator, current) => accumulator + (current || 0), 0)
}

const countNeighbours = (cells, index) => {
  const width = Math.sqrt(cells.length)
  return add(
    index % width ? cells[index - 1] : 0,
    (index + 1) % width ? cells[index + 1] : 0,
    cells[index - width],
    index % width ? cells[index - width - 1] : 0,
    (index + 1) % width ? cells[index - width + 1] : 0,
    cells[index + width],
    index % width ? cells[index + width - 1] : 0,
    (index + 1) % width ? cells[index + width + 1] : 0
  )
}

const regenerate = cells => cells.map(cell => isAlive(cell, 0))

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours
};
