const express = require('express')
const app = express()

//Defintion des routes

app.get('/', (requete, reponse) => {
    reponse.sendFile('./IHM/index.html', { root: __dirname })
   
})

app.get('/apropos', (requete, reponse, next) => {
    reponse.sendFile('./IHM/apropos.html', { root: __dirname })
    
})

app.use((requete, reponse, next) => {
    reponse.sendFile('./IHM/pageIntrouvable.html', { root: __dirname })
    next()
})

app.listen(3002, () => {
    console.log('Server lance au port 3002')
})
