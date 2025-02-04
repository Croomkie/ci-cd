'use strict';

var nodeServer = require('@hono/node-server');
var hono = require('hono');

const app = new hono.Hono();
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
const port = 3e3;
console.log(`Server is running on http://localhost:${port}`);
nodeServer.serve({
  fetch: app.fetch,
  port
});
