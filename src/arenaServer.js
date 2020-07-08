const Arena = require("bull-arena");

const express = require("express");

const router = express.Router();

const defautHostConfig = {
  hostId: "localhost",
  redis: {
    host: "127.0.0.1",
    port: 6379,
  },
};

const queueNames = ["sendMailQueue"];

const arena = Arena({
  queues: queueNames.map((q) => ({
    name: q,
    ...defautHostConfig,
  })),
});

router.use("/", arena);
