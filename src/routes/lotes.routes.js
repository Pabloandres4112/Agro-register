import { Router } from "express";
import { listarTodo, registrar } from "../controller/lotes.controller.js";

const rutasdelotes = Router()

//localhost:3000/lotes
rutasdelotes.get("/lotes", listarTodo)
rutasdelotes.post("/lotes", registrar)


export default rutasdelotes