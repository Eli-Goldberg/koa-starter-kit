const Router = require('koa-router');
const router = new Router();
const statusController = require('../controllers/status.controller');

router.get('/status', statusController.getStatus);

module.exports = router.routes();
