import { Router } from "express";
import { RegistrarTipoActividad, listarTipoActividad, editarTipoActividad, actualizarTipoActividad, desactivarTipoActividad, buscarTipoActividad } from "../controllers/TipoActividad.controller.js";

const rutaDeTipoActividad = Router();

rutaDeTipoActividad.post("/registrarActividad", RegistrarTipoActividad);
rutaDeTipoActividad.get("/listarActividad", listarTipoActividad);
rutaDeTipoActividad.put("/editarActividad", editarTipoActividad);
rutaDeTipoActividad.put("/actualizarActividad", actualizarTipoActividad);
rutaDeTipoActividad.delete("/desactivarActividad", desactivarTipoActividad);
rutaDeTipoActividad.get("/buscarActividad", buscarTipoActividad);

export default rutaDeTipoActividad;
