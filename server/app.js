require('dotenv');
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORTS || 3006;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const route = require('./router');
app.use(route);

// console.log(port)

// app.listen(port,()=>{
//     console.log(`App listening on port ${port}`);
// })