import express from 'express'
import body_parser from 'body-parser'
import rutaDeTipoActividad from './src/routes/TipoActividad.routes.js'

const servidor = express()
servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extended:false}))
servidor.use(rutaDeTipoActividad )


servidor.listen(4000,()=>{
    console.log("si esta sirviendo")
})