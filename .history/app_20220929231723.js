const express = require('express')
const { statut } = require('express/lib/response')

const app = express()
app.use(express.static('node_modules/bootstrap/dist/css/bootstrap.min.css'))

//Definition du moteur de visualisation (vieuw engine)
app.set('vieuw engine','ejs');
app.set('vieuws','IHM')

//Defintion des routes
app.get('/', (requete, reponse) => {
    reponse.status(200).render()

})

app.get('/apropos', (requete, reponse) => {
    reponse.status(200).sendFile('./IHM/apropos.html', { root: __dirname })

})

app.use((requete, reponse) => {
    reponse.status(200).sendFile('./IHM/pageIntrouvable.html', { root: __dirname })
})

app.listen(3002, () => {
    console.log('Server lance au port 3002')
})
