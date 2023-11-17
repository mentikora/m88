import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pug from "pug";
import compression from "compression";

import getProjectById from "./route/projects.js";

const PORT = process.env.PORT || 3333;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(compression());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/p/:id", getProjectById);

app.get("/404", (req, res) => {
  res.render("404");
});

app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
