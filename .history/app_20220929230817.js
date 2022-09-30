const express = require('express')
const {statut}=require('express/lib')

const app = express()
app.use(express.static('node_modules/bootstrap/dist/css/bootstrap.min.css'))

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
