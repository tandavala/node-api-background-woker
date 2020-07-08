require("dotenv").config();
const Sentry = require("@sentry/node");
const express = require("express");
const faker = require("faker");

const mailer = require("./mailer/helper");

const { sendMailQueue } = require("./queues");

const app = express();

Sentry.init({
  dsn:
    "https://fea734ff4ddc46c59c65ad77df7fee81@o417758.ingest.sentry.io/5319123",
});

app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

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
  myUndefinedFunction();
});

app.get("/send-email", async (req, res) => {
  /* await mailer.sendEmail(
    "tandavala10@gmail.com",
    "jose.tandavala@gmail.com",
    "Por favor verifique a tua conta",
    "Parabens email enviado"
  );*/

  sendMailQueue.add(mailData, jobOptions);

  console.log("email enviado");

  res.send("Sending email");
});

PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("server run up and running"));
