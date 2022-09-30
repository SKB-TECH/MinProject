const express = require('express')
const app = express();

//Defintion des routes 

app.get('/', (requete, reponse, next) => {
    reponse.sendFile('./IHM/index.html', { root: __dirname });
    next();
})

app.get('/', (requete, reponse, next) => {
    reponse.sendFile('./IHM/apropos.html', { root: __dirname });
    next();
})

app.use



app.listen(3002, () => {
    console.log('Server lance au port 3002');
})