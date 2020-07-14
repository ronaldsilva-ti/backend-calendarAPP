const express = require('express');
require('dotenv').config();



//Criar o servidor de express
const app = express();

//Diretorio Público
app.use( express.static("public") )


//Leitura e passagem de corpo
app.use( express.json() );


//Rotas
app.use('/api/auth', require('./routes/auth') )



//Rodar o servidor
app.listen( process.env.PORT ,() => {
    console.log(`Server running PORT ${ process.env.PORT  }`)
})