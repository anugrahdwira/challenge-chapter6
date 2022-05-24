// import model User
const { User } = require('./models');
const user = require('./models/user');

// membuat data baru ke tabel User
User.create({
  username: 'anugrah',
  password: 'binar',
  approved: true,
}).then((user) => {
  console.log(user)
});