const {
  getAllArticles,
  getOneArticle,
  addArticle,
} = require("../models/Article");

const getArticles = async () => {
  const articles = await getAllArticles();
  return articles;
};

const getArticle = async (id) => {
  const article = await getOneArticle(id);
  return article[0];
};

const addNewArticle = async (article) => {
  await addArticle(article);
};

module.exports = {
  getArticles,
  getArticle,
  addNewArticle,
};
