/* 
    ROTAS DE USUARIO / AUTH
    HOST + /api/auth

*/

const { Router } = require('express');
const router = Router();

const { criarUsuario, loginUsuario, revalidarToken }  = require('../controllers/auth');



router.post("/new", criarUsuario);

router.post("/", loginUsuario);

router.get("/renew", revalidarToken);



module.exports = router;