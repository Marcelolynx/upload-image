require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");


/*
Database Setup
*/
mongoose.connect (
    process.env.MONGO_URL,
    {
        useNewUrlParser: true

    }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
        "/files",
        express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
    );

app.use(require('./routes'));

app.listen(3000);
