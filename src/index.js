require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("ola mundo servers workers"));

PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("server run up and running"));
