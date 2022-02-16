const express = require('express');
require('dotenv/config');

// const dotenv = require('dotenv');
const routers = require('./routers/routers');
const error = require('./middlewares/error');

// dotenv.config();
const PORT = process.env.DOOR || 3000;
const app = express();
app.use(express.json());
app.use('/', routers);
app.listen(PORT, () => console.log(`aguardando requisições na porta ${PORT}!`));

app.use(error);