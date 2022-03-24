import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("API is runnin fast af boiiii");
});

app.listen(5000, console.log("server is running fast af boiiii"))