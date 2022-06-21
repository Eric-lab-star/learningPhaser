import express from "express";

const app = express();
const port = 3000;
app.set("view engine", "pug");
app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.render("phaser");
});

app.get("/video", (req, res) => {
  res.render("phaser.html");
});

app.listen(port, () => {
  console.log(`goto http://localhost:${port}`);
});
