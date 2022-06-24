import express from "express";

const app = express();
const port = 3000;
app.set("views", __dirname + "/views");
app.set("view engine", "html");

app.use("/assets", express.static("src/assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/part1.html");
});

app.listen(port, () => {
  console.log(`goto http://localhost:${port}`);
});
