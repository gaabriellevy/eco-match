const express = require("express");
const app = express();
const cors = require('cors');
const Router = require('./routes');

app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(3333)