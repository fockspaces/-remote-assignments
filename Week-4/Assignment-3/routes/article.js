const express = require("express");
const article = express.Router();
const articles = require("../controllers/articles");

article.use(articles.isLoggedIn);
article.route("/").get(articles.getArticles).post(articles.addNewArticle);
article.get("/new", articles.renderArticles);

article
  .route("/:id")
  .get(articles.renderArticle)
  .put(articles.isAuthor, articles.updatePost)
  .delete(articles.isAuthor, articles.deletePost);

article.get("/:id/edit", articles.isAuthor, articles.renderEdit);

module.exports = article;
