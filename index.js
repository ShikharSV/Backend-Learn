require('dotenv').config();

const express =require('express')
const connectDB  = require('./src/db/db.js');

const app = express();



connectDB();

