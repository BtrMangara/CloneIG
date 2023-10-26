require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const route = require('./router');
app.use(route);


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})