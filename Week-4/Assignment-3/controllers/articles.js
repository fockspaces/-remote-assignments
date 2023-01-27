const { getAllArticles, getOneArticle } = require("../models/Article");

const getArticles = async () => {
  const articles = await getAllArticles();
  return articles;
};

const getArticle = async (id) => {
  const article = await getOneArticle(id);
  return article[0];
};

module.exports = {
  getArticles,
  getArticle,
};
