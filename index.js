import express from'express'
import  body_parsere from 'body-parser'
import rutasdeusuarios from './src/routes/usuarios.rute.js'
import rutasdelotes from './src/routes/lotes.routes.js'

const servidor = express()

servidor.use(body_parsere.json())
servidor.use(body_parsere.urlencoded({extended: false}))
servidor.use(rutasdeusuarios)
servidor.use(rutasdelotes)

servidor.listen(3000, () =>{
    console.log("esta funcionando")
})