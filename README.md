# Game_of_Life_Jest_TDD
A web application implemented in JavaScript and Jest library following TDD methodology


Our task is to implement the Conway's Game of Life using TDD. First we will build the engine, and then we will build a front end solution. We're not going to get into functional programming, Object Oriented programming etc, for this we'll just be concentrating on writing tests and breaking a problem down into component parts.

Check out the completed version of the project to get an idea what it is. The game is grid based consisting of cells that are either alive or dead. Through each cycle of life this algorithm applies:

any live cell with fewer than two live neigbours dies, as if by under-population
any live cell with two or three live neighbours lives on to the next generation
any live cell with more than three live neighbours dies, as if by overpopulation
any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
For our example we want to see the game in a browser. This is one of the great things about Jest - browser objects such as window and document are already stubbed for us.

