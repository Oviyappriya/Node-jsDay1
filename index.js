import express from "express";
import { createFile, readFolder } from "./fs-utils.js";
const app = express();
app.get("/create-file", (req, res) => {
  createFile();

  res.send({ msg: "File created successfully" });
});
app.get("/read-files", (req, res) => {
  const files = readFolder("files");
  console.log("ww");
  res.send(files);
});

app.listen(8000, () => {
  console.log("APIs Listening on 8000");
});
