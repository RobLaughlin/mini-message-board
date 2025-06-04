import express from "express";
import "dotenv/config";
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (_, res) => {
    res.render("index");
    // res.send("YOO");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
