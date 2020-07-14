const { response } = require('express');


const criarUsuario = (req,res = response) => {

    const { name, email, senha } = req.body;

    if( name.length < 5 ){        
        return res.status(400).json({
            ok:false,
            msg:'O nome deve ter no minimo 5 letras'
        })
    }

    res.json({
        ok:true,
        msg:'registro',
        name,
        email,
        senha
    })
}

const loginUsuario = ( req, res = response ) => {

    const { email,senha } = req.body;

    res.json({
        ok:true,
        msg:'login',
        email,
        senha
    })
}

const revalidarToken = ( req, res = response ) => {
    res.json({
        ok:true,
        msg:'renew'
    })
}

module.exports = {
    criarUsuario,
    loginUsuario,
    revalidarToken
}