const express = require('express');
const app = express();
const routes = require('./router');

app.use(routes);

app.listen(3333);