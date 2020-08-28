import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './Routes/userRoute';
import productsRoute from './Routes/productRoute';

dotenv.config();
const mongodb_Url =config.MONGODB_URL;
mongoose.connect(mongodb_Url,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users",userRoute);
app.use("/api/products",productsRoute);


app.listen(5000, () =>{console.log("Server started at http://localhost:5000")});