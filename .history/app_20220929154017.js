const express = require('express')
const app = express();

//Defintion des routes 

app.get('/', (requete, reponse) => {
    reponse.sendFile('./IHM/index.html', { root: __dirname })
})