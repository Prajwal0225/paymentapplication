const express = require("express");
const rootRouter = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 80;



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",rootRouter);



mongoose.connect("mongodb+srv://prajwalsomalkar025:VYZuWElRSGQ0r9wd@clustercohort.bednah4.mongodb.net/paymentapplication");


app.listen({port},()=>{
    console.log(`listening to port ${port}`);
})

