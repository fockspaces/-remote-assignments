const express = require("express");
const article = express.Router();
const {
  getArticles,
  getArticle,
  addNewArticle,
} = require("../controllers/articles");

article.get("/", async (req, res) => {
  const articles = await getArticles();
  res.render("articles/index", { articles });
});

article.post("/", addNewArticle);

article.get("/new", async (req, res) => {
  res.render("articles/new");
});

article.get("/:id", async (req, res) => {
  const { id } = req.params;
  const article = await getArticle(id);
  res.render("articles/article", { article });
});

module.exports = article;
