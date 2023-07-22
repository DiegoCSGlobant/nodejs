const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true })); // Parses the body of the request

const routes = require('./routes/admin');

app.use(routes);


app.listen(3000)
