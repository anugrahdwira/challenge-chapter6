const { User } = require('./models');
const user = require('./models/user');

User.findOne({
  where: { id: 1 }
}).then((user) => {
  console.log(user.id);
  console.log(user.username);
  console.log(user.password);
  console.log(user.approved);
});