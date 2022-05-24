// import express
const express = require('express');
const res = require('express/lib/response');
const app = express()

// atur port
const port = 3000;

//  baca data users
const users = require('./db/users.json');

// gunakan middleware
app.use(express.static('public')); // agar bisa baca request body berformat JSON
app.use(express.urlencoded({ extended: false })); // agar bisa baca request body format Form

// atur view engine yang digunakan
app.set('view engine', 'ejs');

// rute halaman utama
app.get('/', (req, res) => {
  return res.render('index');
});

// rute halaman game
app.get('/game', (req, res) => {
  return res.render('game');
});

// rute halaman data user
app.get('/users', (req, res) => {
  return res.json(users);
});

// rute halaman login
app.get('/login', (req, res) => {
  return res.render('login', { message: '' });
});

// rute untuk memproses login
app.post('/login', (req, res) => {
  // baca email & password dari request body
  const email = req.body.email;
  const password = req.body.password;

  // siapkan variabel untuk menampung data user
  let userFound;

  // lakukan perulangan
  for (let index = 0; index < users.length; index++) {
    // jika email user pada index sekian sama dengan email dari request body
    if (users[index].email === email) {
      // masukkan data user tersebut ke variable userFound
      userFound = users[index];
    } 
  }

  // jika email tidak ditemukan
  if(!userFound) {
    console.log('not found');

    // alihkan user ke halaman login & beri pesan untuk ditampilkan di ejs
    return res.render('login', {
      message: 'User not found'
    });
  }

  // jika data ada tapi password tidak sesuai
  if(userFound.password != password) {
    console.log('wrong pass');

    // alihkan user ke halaman login & beri pesan untuk ditampilkan di ejs
    return res.render('login', {
      message: 'Incorrect password'
    });
  }

  // jika password sesuai, alihkan user ke halaman game
  return res.render('game');
});

// import model user
const { User } = require('./models');
const user = require('./models/user');

// import model biodata
const { Biodata } = require('./models');
const biodata = require('./models/user');


















// menggunakan middleware json
app.use(express.json())

// menggunakan middleware json
app.use(express.json());

// menggunakan middleware form
app.use(express.urlencoded({ extended: false }));

// gunakan ejs sebagai view engine
app.set('view engine', 'ejs');


// GET all users
app.get('/users', (req, res) => {
	User.findAll()
	// disini callback menggunakan 1 parameter berupa hasil proses findAll
	.then(users => {
	res.render('users/index', {
			users
		})
	})
})

// GET untuk menampilkan halaman create
app.get('/users/create', (req, res) => {
	res.render('users/create');
});

// GET user by ID
app.get('/users/:id', (req, res) => {
User.findOne({
	where: { id: req.params.id }
})
	.then(users => {
		res.status(200).json(users)
})
})

// POST an user
app.post('/users', (req, res) => {
  User.create({
		username: req.body.username,
		password: req.body.password
	})
		.then(users => {
			res.send('User berhasil dibuat')
		})
	});


		// PUT an user
		app.put('/users/id', (req, res) => {
			User.update({
				username: req.body.username,
				password: req.body.password,
				approved: req.body.approved
			}, {
				where: { id: req.params.id }
			})
				.then(users => {
					res.status(200).json("User update")
				}) .catch(err => {
					res.status(422).json("Can't update user")
				})
	})

			// DELETE an user
			app.delete('/users/:id', (req, res) => {
				User.destroy({
					where: { id: req.params.id }
				})
				.then(users => {
					res.status(200).json("User deleted")
				}).catch(err => {
					res.status(422).json("Can't delete user")
				})
			})

			app.get('/users/:id', (req, res) => {
				User.findOne({
					where: { id: req.params.id }
				})
					.then(users => {
						res.render('users/show', { users: users })
			})
		})

		app.get('/users/delete/:id', (req, res) => {
			User.destroy({
				where: { id: req.params.id }
			})
				.then (() => {
					res.send('User berhasil dihapus')
				})
			})

			// GET/users/update, menampilkan form update
			app.get('/users/update/:id', (req, res) => {
			User.findOne({
				where: { id: req.params.id }
			})
				.then(users => {
					res.render('users/update', {
						users
					})
				})
			})

      // GET all biodata
app.get('/biodata', (req, res) => {
	Biodata.findAll()
	// disini callback menggunakan 1 parameter berupa hasil proses findAll
	.then(biodata => {
	res.render('biodata/index', {
			biodata
		})
	})
})

// GET untuk menampilkan halaman create
app.get('/biodata/create', (req, res) => {
	res.render('biodata/create');
});

// GET biodata by ID
app.get('/biodata/:id', (req, res) => {
  Biodata.findOne({
    where: { id: req.params.id }
  })
    .then(biodata => {
      res.status(200).json(biodata)
  })
  })
  
  // POST an biodata
  app.post('/biodata', (req, res) => {
    Biodata.create({
      tanggal_lahir: req.body.tanggal_lahir,
      jenis_kelamin: req.body.jenis_kelamin
    })
      .then(biodata => {
        res.send('Biodata berhasil dibuat')
      })
    });
  
  
      // PUT an biodata
      app.put('/biodata/id', (req, res) => {
        Biodata.update({
          tanggal_lahir: req.body.tanggal_lahir,
          jenis_kelamin: req.body.jenis_kelamin,
          approved: req.body.approved
        }, {
          where: { id: req.params.id }
        })
          .then(biodata => {
            res.status(200).json("Biodata update")
          }) .catch(err => {
            res.status(422).json("Can't update biodata")
          })
    })
  
        // DELETE a biodata
        app.delete('/biodata/:id', (req, res) => {
          Biodata.destroy({
            where: { id: req.params.id }
          })
          .then(biodata => {
            res.status(200).json("Biodata deleted")
          }).catch(err => {
            res.status(422).json("Can't delete biodata")
          })
        })
  
        app.get('/biodata/:id', (req, res) => {
          Biodata.findOne({
            where: { id: req.params.id }
          })
            .then(biodata => {
              res.render('biodata/show', { biodata: biodata })
        })
      })
  
      app.get('/biodata/delete/:id', (req, res) => {
        Biodata.destroy({
          where: { id: req.params.id }
        })
          .then (() => {
            res.send('Biodata berhasil dihapus')
          })
        })
  
        // GET/biodata/update, menampilkan form update
        app.get('/biodata/update/:id', (req, res) => {
        Biodata.findOne({
          where: { id: req.params.id }
        })
          .then(biodata => {
            res.render('biodata/update', {
              biodata
            })
          })
        })

        // GET all histories
app.get('/histories', (req, res) => {
	Histories.findAll()
	// disini callback menggunakan 1 parameter berupa hasil proses findAll
	.then(histories => {
	res.render('histories/index', {
			histories
		})
	})
})

// GET untuk menampilkan halaman create
app.get('/histories/create', (req, res) => {
	res.render('histories/create');
});

// GET biodata by ID
app.get('/histories/:id', (req, res) => {
  Histories.findOne({
    where: { id: req.params.id }
  })
    .then(histories => {
      res.status(200).json(histories)
  })
  })
  
  // POST a histories
  app.post('/histories', (req, res) => {
    Histories.create({
      tanggal_main: req.body.tanggal_main,
      hasil: req.body.hasil
    })
      .then(histories => {
        res.send('History berhasil dibuat')
      })
    });
  
  
      // PUT a history
      app.put('/histories/id', (req, res) => {
        Histories.update({
          tanggal_main: req.body.tanggal_main,
          hasil: req.body.hasil,
          approved: req.body.approved
        }, {
          where: { id: req.params.id }
        })
          .then(histories => {
            res.status(200).json("History update")
          }) .catch(err => {
            res.status(422).json("Can't update history")
          })
    })
  
        // DELETE a history
        app.delete('/histories/:id', (req, res) => {
          Histories.destroy({
            where: { id: req.params.id }
          })
          .then(histories => {
            res.status(200).json("History deleted")
          }).catch(err => {
            res.status(422).json("Can't delete history")
          })
        })
  
        app.get('/histories/:id', (req, res) => {
          Histories.findOne({
            where: { id: req.params.id }
          })
            .then(histories => {
              res.render('histories/show', { histories: histories })
        })
      })
  
      app.get('/histories/delete/:id', (req, res) => {
        Histories.destroy({
          where: { id: req.params.id }
        })
          .then (() => {
            res.send('History berhasil dihapus')
          })
        })
  
        // GET/history/update, menampilkan form update
        app.get('/histories/update/:id', (req, res) => {
        Histories.findOne({
          where: { id: req.params.id }
        })
          .then(histories => {
            res.render('histories/update', {
              histories
            })
          })
        })

		app.listen(3000);