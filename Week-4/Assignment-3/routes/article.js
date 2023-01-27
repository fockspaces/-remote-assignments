const express = require("express");
const article = express.Router();
const articles = require("../controllers/articles");

article.route("/").get(articles.getArticles).post(articles.addNewArticle);

article.get("/new", articles.renderArticles);

article.use("/:id", articles.authID);
article
  .route("/:id")
  .get(articles.renderArticle)
  .put(articles.updatePost)
  .delete(articles.deletePost);

article.get("/:id/edit", articles.renderEdit);

module.exports = article;
