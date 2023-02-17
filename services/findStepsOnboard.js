const findShortestWay = (board) => {
  const start = [24, 13]; // Punto de inicio
  const end = [0, 19]; // Punto final
  const visited = new Set(); // Conjunto de nodos visitados
  const queue = [[start, []]]; // Cola de nodos a visitar

  while (queue.length > 0) {
    const [node, path] = queue.shift();
    const [x, y] = node;

    if (x === end[0] && y === end[1]) {
      // Hemos encontrado el punto final, devolver el camino
      return path.concat(node);
    }

    // Comprobar que el nodo actual no se ha visitado antes
    const nodeId = x + "," + y;
    if (visited.has(nodeId)) {
      continue;
    }
    visited.add(nodeId);

    // Añadir los nodos vecinos a la cola
    // @ts-ignore
    const neighbors = getNeighbors(node, board);
    for (const neighbor of neighbors) {
      queue.push([neighbor, path.concat(node)]);
    }
  }

  // No se ha encontrado un camino
  return null;
};

const getNeighbors = (node, maze) => {
  const [x, y] = node;
  const rows = maze.length;
  const cols = maze[0].length;
  const neighbors = [];

  if (x > 0 && maze[x - 1][y] === 0) {
    neighbors.push([x - 1, y]);
  }
  if (y > 0 && maze[x][y - 1] === 0) {
    neighbors.push([x, y - 1]);
  }
  if (x < rows - 1 && maze[x + 1][y] === 0) {
    neighbors.push([x + 1, y]);
  }
  if (y < cols - 1 && maze[x][y + 1] === 0) {
    neighbors.push([x, y + 1]);
  }

  return neighbors;
};

const drawSteps = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push([arr[i], arr[i + 1]]);
  }
  return result;
}

const drawBoardWithSteps = (maze, arr) => {
  const board = maze;

  for (let i = 0; i < arr.length; i++) {
    const step = arr[i];
    board[step[0]][step[1]] = "-";
  }
  return board;
}

module.exports = {
    findShortestWay,
    drawSteps,
    drawBoardWithSteps
}
