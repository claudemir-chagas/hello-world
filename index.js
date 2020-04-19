require('dotenv').config({ path: `${__dirname}/.env` });

const http = require('http');
const Koa = require('koa'); // koa@2
const KoaRouter = require('koa-router');

// Create app.
const app = new Koa();

// Create router.
const router = new KoaRouter();

// path: '/'
router.get('/', async (ctx) => {
  ctx.body = 'Hello World!';
});

// path: '/heath'
router.get('/health', async (ctx) => {
  ctx.body = 'Ok!';
});

app.use(router.routes());
app.use(router.allowedMethods());

// Create server.
const server = http.createServer(app.callback());

const port = process.env.NODE_PORT || 8080;

// Listen to port.
server.listen(port, (err) => {
  if (err) {
    console.error(err); // eslint-disable-line
  } else {
    console.info(`Listening to port ${port}.`); // eslint-disable-line
  }
});
