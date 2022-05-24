const res = require("express/lib/response");
const { append } = require("express/lib/response");

const index = (req, res) => {
  res.status(200);
  return res.render('index');
};

const game = (req, res) => {
  res.status(200);
  return res.render('game');
};

const login = (req, res) => {
  res.status(200);
  return res.render('login');
};


module.exports = {
  index,
  game,
  login
};

