const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended: true}));
/* Harcoded */
const users = [
    {id: 1, name: 'Franco', email: 'Franco@mail.com', password: '1234'},
    {id: 2, name: 'Toni', email: 'Toni@mail.com', password: '1234'}
  ]
  function* idGenerator () {
    let number = 3;
    while (true) {
      yield number;
      number++;
    }
  }
/* Middleware isAuthenticated */
const isAuthenticated = function (req, res, next) {
    const { userId } = req.cookies;
    const user = users.find(e => e.id === parseInt(userId));
    if (!user) {
      return res.redirect('/admin/login');
    }
    next();
  }
/* Middleware isNotAuthenticated */
const isNotAuthenticated = function (req, res, next) {
const { userId } = req.cookies;
const user = users.find(e => e.id === parseInt(userId));
if (user) {
    return res.redirect('/admin/panel');
}
next();
}
/* Route My market App */  
router.get('/', (req, res) => {
    res.send(`
    <h3>Panel config Admin</h3>
    ${req.cookies.userId ? `<a href='/admin/panel'>Panel Perfil</a>
    <form method='post' action='/admin/logout'>
      <button>Salir</button>
    </form>
    ` : `
    <a href='/admin/login'>Ingresar</a>
    <a href='/admin/register'>Registrarse</a>`} 
    `)
});
/* Route Login, method Get and Post */
router.get('/login', (req, res) => {  
    res.send(`<h3>Iniciar sesión</h3>
    <form method='post' action='/admin/login'>
      <input type='email' name='email' placeholder='Email' required />
      <input type='password' name='password' placeholder='Contraseña' required />
      <input type='submit' value='Ingresar' />
    </form>
    <a href='/admin/register'>Registrarse</a>`);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = users.find(e => e.email === email && e.password === password);
      if (!user) {
        return res.redirect('/admin/login');
      }
      res.cookie('userId', user.id);    
      return res.redirect('/admin/panel');
    }
    else {
      return res.redirect('/admin/login');
    }
});
/* Route Home after login */
router.get('/panel', isAuthenticated, (req, res) => {
    const { userId } = req.cookies;
    const user = users.find(e => e.id === parseInt(userId));
    return res.status(200).send(`
      <h3>Bienvenido ${user.name}</h3>
      <h4>${user.email}</h4>
      <a href='/admin'>Inicio</a>
    `);
});
/* Route Register, method Get and Post */
router.get('/register', isNotAuthenticated, (req, res) => {
    res.send(`<h3>Register</h3>
    <form method='post' action='/admin/register'>
      <input name='name' placeholder='Nombre' required />
      <input type='email' name='email' placeholder='Email' required />
      <input type='password' name='password' placeholder='Contraseña' required />
      <input type='submit' value='Registrarse' />
    </form>
    <a href='/admin/login'>Iniciar sesión</a>`);
});
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const user = users.find(e => e.email === email);
      if (user) {
        return res.redirect('/register');
      }
      const newId = idGenerator();
      let newUser = { id: newId.next().value, name, email, password }
      users.push(newUser);
      console.log(users);
      return res.status(200).redirect('/admin/panel');
    }
    return res.redirect('/register');
});
/* Route Logout method Post */
router.post('/logout', (req, res) => {
    res.clearCookie('userId');
    res.redirect('/admin');
});

module.exports = router;