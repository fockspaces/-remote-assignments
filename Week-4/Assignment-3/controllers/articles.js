const {
  getAllArticles,
  getOneArticle,
  addArticle,
  UpdatePost,
  DeletePost,
} = require("../models/Article");

// display
const getArticles = async (req, res) => {
  const articles = await getAllArticles();
  res.render("articles/index", { articles });
};

const getArticle = async (id) => {
  const article = await getOneArticle(id);
  return article[0];
};

const renderArticle = async (req, res) => {
  const { id } = req.params;
  const article = await getArticle(id);
  res.render("articles/article", { article });
};

const renderEdit = async (req, res) => {
  const { id } = req.params;
  const article = await getArticle(id);
  res.render("articles/edit", { article });
};

// New
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

// Update
const updatePost = async (req, res) => {
  try {
    const { article } = req.body;
    await UpdatePost(article);
    res.redirect(`/article/${article.id}`);
  } catch (e) {
    console.log("error:", e.message);
  }
};

// Delete
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await DeletePost(id);
    res.redirect(`/article`);
  } catch (e) {
    console.log("error:", e.message);
  }
};

module.exports = {
  getArticles,
  getArticle,
  addNewArticle,
  renderArticles,
  renderArticle,
  renderEdit,
  updatePost,
  deletePost,
};
