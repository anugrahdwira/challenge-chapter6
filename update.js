const { User } = require('./models');

User.update({
  approved: true,
}, {
  where: { id: 1 }
})
.then((result) => console.log(result))
.catch((err) => console.log('gagal mengupdate'))