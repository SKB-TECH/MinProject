const express = require('express')
const app = express();

//Defintion des routes 

app.get('/', (requete, reponse, next) => {
    reponse.sendFile('./IHM/index.html', { root: __dirname });
    next();
})





app.listen(3002,())