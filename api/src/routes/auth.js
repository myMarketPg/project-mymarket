const express = require('express');
const router = express();

const { auth } = require('express-openid-connect');
router.use(auth({
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  secret: process.env.SECRET
}));

router.get('/', (req, res) => {
  res.send(`
    <h3>Panel config Admin</h3>
    ${req.oidc.isAuthenticated() ? `<a href='/admin/panel'>Panel Perfil</a>
    <form method='post' action='/admin/logout'>
      <button>Salir</button>
    </form>
    ` : `
    <a href='/admin/login'>Ingresar</a>
    <a href='/admin/register'>Registrarse</a>`} 
    `)
});

module.exports = router;