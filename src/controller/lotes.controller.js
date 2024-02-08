import { pool } from "../database/conexion.js";



//listar
export const listarTodo =async (req, res)=> {
    try {
        const [result] = await pool.query("SELECT * FROM lotes")

        if (result.length > 0 ) {
            res.status(200).json(result)
        }else{
            res.status(404).json({
                "mensaje": "no hay lotes"
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
        const { nombre, estado } =req.body
        const [result] = await pool.query("INSERT INTO lotes (nombre, estado) VALUES (?, ?)", [nombre, estado])

        if (result.affectedRows > 0 ) {
            res.json({
                "mensaje": "lote registrado con exito"
            })
        }else{
            res.json({
                "mensaje": "no se pudo registrar el lote "
            })
        }
        
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}
/// eliminar 
/*
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
*/