// index.js
import express from 'express';
import bodyParser from 'body-parser';
import { rutaDeVariedadCultivo } from './src/routes/VariedadCultivo.route.js'; // Utiliza la desestructuración para importar rutaDeVariedadCultivo
import { rutaDeTipoRecurso } from './src/routes/TipoRecurso.route.js'; // Utiliza la desestructuración para importar rutaDeTipoRecurso

const servidor = express();
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));
servidor.use(rutaDeVariedadCultivo); // Solo necesitas pasar la ruta de la variedad de cultivo aquí, no es necesario pasar rutaDeTipoRecurso
servidor.use(rutaDeTipoRecurso);

servidor.listen(4000, () => {
    console.log("¡El servidor está corriendo en el puerto 4000!");
});
