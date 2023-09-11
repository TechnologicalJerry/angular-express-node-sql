const express = require('express');

const app = express();

app.use(express.json());

const serverName = process.env.SERVER_NAME;

const serverPort = process.env.SERVER_PORT | 5050;