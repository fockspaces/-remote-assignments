const {
  getAllArticles,
  getOneArticle,
  addArticle,
} = require("../models/Article");

const getArticles = async (req, res) => {
  const articles = await getAllArticles();
  res.render("articles/index", { articles });
};

const getArticle = async (id) => {
  const article = await getOneArticle(id);
  return article[0];
};

// new post
const renderArticles = async (req, res) => {
  res.render("articles/new");
};

const addNewArticle = async (req, res) => {
  try {
    const { article } = req.body;
    await addArticle(article);
    res.render("articles/article", { article });
  } catch (e) {
    console.log("error:", e.message);
  }
};

// display post
const renderArticle = async (req, res) => {
  const { id } = req.params;
  const article = await getArticle(id);
  res.render("articles/article", { article });
};

module.exports = {
  getArticles,
  getArticle,
  addNewArticle,
  renderArticles,
  renderArticle,
};
