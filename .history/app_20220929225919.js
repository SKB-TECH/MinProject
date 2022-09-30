const express = require('express')
const app = express()

app.use(express.static('../node_modules'))

//Defintion des routes
app.get('/', (requete, reponse) => {
    reponse.sendFile('./IHM/index.html', { root: __dirname })

})

app.get('/apropos', (requete, reponse) => {
    reponse.sendFile('./IHM/apropos.html', { root: __dirname })

})

app.use((requete, reponse) => {
    reponse.sendFile('./IHM/pageIntrouvable.html', { root: __dirname })
})

app.listen(3002, () => {
    console.log('Server lance au port 3002')
})
