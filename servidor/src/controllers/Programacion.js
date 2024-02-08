exports.index = (req, res) => {
    try {
        const responseData = {
            status: 'success',
            message: 'Dato guardado correctamente',
            data: {
                IDprogramacion: req.body.IDprogramacion,
                fecha_inicio: req.body.fecha_inicio,
                fk_id_lote: req.body.fk_id_lote,
                fk_asignacion: req.body.fk_asignacion,
                observacion: req.body.observacion,
                fecha_fin: req.body.fecha_fin
            }
        };
        res.json(responseData);
    } catch (error) {
        const errorResponse = {
            status: 'error',
            message: error.message || 'Error en el servidor'
        };
        res.json(errorResponse);
    }
};
