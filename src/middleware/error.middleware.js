async function middleware(ctx, next) {
  try {
    ctx.status = 200;
    await next();
  }
  catch (err) {
    ctx.body = err.message ? err.message : 'Unknown error';
    ctx.status = err.statusCode || 500;
  }
}

module.exports = middleware;
