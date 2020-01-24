const isAlive = (cell, neighbours) =>
  (neighbours === 3 || cell && neighbours == 2)? 1 : 0

const generate = (root) => new Array(root * root).fill(0)

const add = (...args) => {
  return args.reduce((accumulator, current) => accumulator + (current || 0), 0)
}

const leftColumnValues = (index, width, cells) => 
  index % width ? [
    cells[index - 1],
    cells[index - width - 1],
    cells[index + width - 1],
    ] : []

const rightColumnValues = (index, width, cells) => 
(index + 1) % width ? [
  cells[index + 1],
  cells[index - width + 1],
  cells[index + width + 1]
  ] : []


const countNeighbours = (cells, index) => {
  const width = Math.sqrt(cells.length)
  return add(
    cells[index - width],
    cells[index + width],
    ...leftColumnValues(index, width, cells),
    ...rightColumnValues(index, width, cells)
  )
}

const regenerate = cells => cells.map((cell,index) => isAlive(cell, countNeighbours(cells, index)))

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours
};
