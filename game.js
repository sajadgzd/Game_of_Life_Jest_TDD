const isAlive = (cell, neighbours) =>
  (neighbours === 3 || cell && neighbours == 2)? 1 : 0


window.game = {
  isAlive
};
