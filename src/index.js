require("dotenv").config();
const express = require("express");
const faker = require("faker");

const { sendMailQueue } = require("./queues");

const app = express();

app.use(express.json());

const mailData = {
  userEmail: faker.internet.email(),
  subject: "Testing new Queue",
  body: "Hello new era",
};

const jobOptions = {
  delay: 5000,
  attemps: 3,
};

app.get("/", (req, res) => {
  res.send("ola mundo servers workers");
});

app.get("/send-email", (req, res) => {
  sendMailQueue.add(mailData, jobOptions);
  res.send("Sending email");
});

PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("server run up and running"));
