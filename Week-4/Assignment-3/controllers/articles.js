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

const addNewArticle = async (req, res) => {
  try {
    const { article } = req.body;
    await addArticle(article);
    res.render("articles/article", { article });
  } catch (e) {
    console.log("error:", e.message);
  }
};

module.exports = {
  getArticles,
  getArticle,
  addNewArticle,
};
