import { Router } from "express";
import { listarTodo, registrar, eliminar } from "../controller/usuarios.controller.js";

const rutasdeusuarios = Router()

//localhost:3000/usuarios
rutasdeusuarios.get("/usuarios", listarTodo)
rutasdeusuarios.post("/usuarios", registrar)
rutasdeusuarios.delete("/usuarios", eliminar);

export default rutasdeusuarios