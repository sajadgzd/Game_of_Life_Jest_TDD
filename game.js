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

const createElement = className => {
  const element = document.createElement('div')
  element.className = className
  return element
}

const drawGrid = cells => {

  const width = Math.sqrt(cells.length)
  const grid = document.getElementById('grid')
  const container = createElement("container")
  let row

  cells.forEach((cell, index) => {
    if (index % width === 0){
      row = createElement("row")
      container.appendChild(row)
    }
    const cellEl = createElement(`cell ${cell === 0 ? "dead":"live"}`)
    container.appendChild(cellEl)
  });
  grid.innerHTML = ""
  grid.appendChild(container)
}

const regenerate = cells => cells.map((cell,index) => isAlive(cell, countNeighbours(cells, index)))

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours,
  drawGrid
};
