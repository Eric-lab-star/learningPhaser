import express from "express";

const app = express();
const port = 3000;
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.render("phaser");
});

app.listen(port, () => {
  console.log(`goto http://localhost:${port}`);
});
