const { User } = require('./models');
const user = require('./models/user');

User.findAll().then((user) => {
  console.log(user);
});