const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

const notFound = (req, res) => {
  req.flash("error", "Sorry, that page doesn't exist.");
  res.status(404).redirect("/");
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  req.flash("error", err.message);
  res.status(err.status || 500).redirect("/");
};

module.exports = { catchAsync, notFound, errorHandler };
