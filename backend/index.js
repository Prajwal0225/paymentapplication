const express = require("express");
const rootRouter = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 80;
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",rootRouter);



mongoose.connect(process.env.Mongodb_url);


app.listen({port},()=>{
    console.log(`listening to port ${port}`);
})

