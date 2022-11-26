import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {orderRouter} from "./src/routes/orderRouter";

const app = express();
dotenv.config();

// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

app.use(bodyParser.json());
app.use("/orders", orderRouter);

app.listen(process.env.PORT, () => {

    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
});