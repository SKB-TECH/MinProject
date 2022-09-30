const express = require('express')
const { statut } = require('express/lib/response')
const app = express()

app.use(express.static('./node_modules/bootstrap/dist/css/bootstrap.min.css'))

//Definition du moteur de visualisation (vieuw engine)
app.set('view engine', 'ejs')
app.set('views', 'IHM')

//Defintion des routes
app.get('/', (requete, reponse) => {
    const dates = Date().toString()

    const notes=[
        {titre:"Dessin",
    }
    ]
    reponse.status(200).render('index', { dates })
})

app.get('/apropos', (requete, reponse) => {
    reponse.status(200).render('apropos')
})

app.use((requete, reponse) => {
    reponse.status(200).render('pageIntrouvable')
})

app.listen(3002, () => {
    console.log('Server lance au port 3002')
})
