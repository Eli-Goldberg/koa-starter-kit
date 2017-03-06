require('./globals');
const routes = require('./routes');
const bodyParser = require('koa-bodyparser');
const errorMiddleware = require('./middleware/error.middleware');
const loggerMiddleware = require('./middleware/logger.middleware');
const Koa = require('koa');
const app = new Koa();


app.use(errorMiddleware);
app.use(loggerMiddleware);
app.use(bodyParser());
app.use(routes);


module.exports = app;
