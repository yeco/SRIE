const express = require('express');
const httpContext = require('express-http-context');

const nextApp = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = process.env.PORT || 3000;
const app = nextApp({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const massive = require('./db');

(async () => {
  await app.prepare();
  const server = express();
  const db = await massive();

  server.use(httpContext.middleware);
  server.use((req, res, next) => {
    httpContext.set('db', db);
    next();
  });

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
