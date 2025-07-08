import express from "express";
import "dotenv/config";
import path from "path";
import { messages } from "./models/messages/messages.js";
import messagesRoute from "./routes/messages/messages.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use("/new", messagesRoute);

app.get("/", (_, res) => {
    res.render("index", { messages });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
