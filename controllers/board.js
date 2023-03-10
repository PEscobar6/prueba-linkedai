const { response, request } = require("express");
const { boardArray } = require("../services/board");
const {
  findShortestWay,
  drawSteps,
  drawBoardWithSteps,
} = require("../services/findStepsOnboard");

const getSteps = (req = request, res = response) => {
  let board = boardArray();
  const shortestWay = findShortestWay(board);
  const responseSteps = drawSteps(shortestWay);

  shortestWay
    ? res.json({
        msg: "Se encontraron lo pasos",
        steps: responseSteps,
      })
    : res.status(500).json("No se encontrĂ³ un camino");
};

const getBoard = (req, res) => {
  let getBoard = boardArray();
  const shortestWay = findShortestWay(getBoard);
  const responseSteps = drawSteps(shortestWay);
  const board = drawBoardWithSteps(responseSteps);

  shortestWay
    ? res.json({
        msg: "Se encontrĂ³ lo pasos",
        board,
      })
    : res.status(500).json("No se encontrĂ³ un camino");
};

const getAll = (req, res) => {
  let getBoard = boardArray();
  const shortestWay = findShortestWay(getBoard);
  const responseSteps = drawSteps(shortestWay);
  const board = drawBoardWithSteps(getBoard, responseSteps);

  shortestWay
    ? res.json({
        msg: "Se encontraron los datos",
        steps: responseSteps,
        board,
      })
    : res.status(500).json("No se encontrĂ³ un camino");
};

module.exports = {
  getSteps,
  getBoard,
  getAll,
};
