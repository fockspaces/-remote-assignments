const {
  getAllArticles,
  getOneArticle,
  addArticle,
  UpdatePost,
  DeletePost,
} = require("../models/Article");
const { catchAsync } = require("../utils/errorHandler");

// display
const getArticles = catchAsync(async (req, res) => {
  const articles = await getAllArticles();
  res.render("articles/index", { articles });
});

const renderArticle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const article = await getOneArticle(id);
  res.render("articles/article", { article });
});

const renderEdit = catchAsync(async (req, res) => {
  const { id } = req.params;
  const article = await getOneArticle(id);
  res.render("articles/edit", { article });
});

// New
const renderArticles = async (req, res) => {
  res.render("articles/new");
};

const addNewArticle = catchAsync(async (req, res) => {
  const { article } = req.body;
  const authorID = req.session.currentUser[0].id;
  await addArticle({ ...article, authorID });
  res.redirect("/article");
});

// Update
const updatePost = catchAsync(async (req, res) => {
  const { article } = req.body;
  await UpdatePost(article);
  res.redirect(`/article/${article.id}`);
});

// Delete
const deletePost = catchAsync(async (req, res) => {
  const { id } = req.params;
  await DeletePost(id);
  res.redirect(`/article`);
});

const isAuthor = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    req.flash("error", "post id is not valid");
    return res.status(400).redirect(`/article/${id}`);
  }

  const article = await getOneArticle(id);
  if (
    !req.session.currentUser ||
    req.session.currentUser[0].id != article.authorID
  ) {
    req.flash("error", "you don't have permission");
    return res.status(400).redirect(`/article/${id}`);
  }

  next();
});

const isLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    req.flash("error", "you don't have permission");
    return res.status(400).redirect(`/`);
  }
  next();
};

module.exports = {
  getArticles,
  addNewArticle,
  renderArticles,
  renderArticle,
  renderEdit,
  updatePost,
  deletePost,
  isAuthor,
  isLoggedIn,
};
