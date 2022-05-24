const { User } = require('./models');

User.destroy({
  where: { 
    id: 1 
}
})
.then(() => console.log("id 1 sudah dihapus"))