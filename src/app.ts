import express, { Request, Response } from "express";
import CONFIG from "./config/config";

const app = express();
const port = process.env.PORT || 3000;

app.listen(CONFIG.PORT, () => {
    console.log(`Listening on port: ${CONFIG.PORT}...`);
});
