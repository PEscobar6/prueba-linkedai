const {Router} = require('express');
const router = Router();

const { getSteps, getBoard, getAll } = require('../controllers/board');

router.get('/steps', getSteps);

router.get('/board', getBoard);

router.get('/', getAll);

module.exports = router;