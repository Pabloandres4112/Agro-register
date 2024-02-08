import { pool } from "../database/conexion.js";



//listar
export const listarTodo =async (req, res)=> {
    try {
        const [result] = await pool.query("SELECT * FROM usuarios")

        if (result.length > 0 ) {
            res.status(200).json(result)
        }else{
            res.status(404).json({
                "mensaje": "no hay usuarios"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}

///registrar
export const registrar =async (req, res)=> {
    try {
        const { nombre, apellidos,correo, rol, cargo } =req.body
        const [result] = await pool.query("INSERT INTO usuarios (nombre, apellidos, correo, rol, cargo) VALUES (?, ?, ?, ?, ?)", [nombre, apellidos, correo, rol, cargo])

        if (result.affectedRows > 0 ) {
            res.json({
                "mensaje": "usuario creado con exito"
            })
        }else{
            res.json({
                "mensaje": "no se pudo crear usuarios"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}
/// eliminar
export const eliminar = async (req, res) => {
    try {
        const { id_usuario } = req.body;
        const [result] = await pool.query("DELETE FROM usuarios WHERE id_usuario =(?)", [id_usuario]);

        if (result.affectedRows > 0) {
            res.json({
                mensaje: "Usuario eliminado con exito",
            });
        } else {
            res.json({
                mensaje: "No se pudo eliminar el usuario",
            });
        }
    } catch (error) {
        res.status(500).json({
            mensaje: error,
        });
    }
};