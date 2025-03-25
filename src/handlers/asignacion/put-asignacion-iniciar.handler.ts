import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { log } from "console"
import { registrarInicioAsignacion } from "../../services/asignaciones/registrar-inicio-asignacion.service"

const putIniciarAsignacionHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting putIniciarAsignacionHandler')
  const asignacionId = req.params.id;
  const { updatedAt } = req.body;
  log(' - asignacionId', asignacionId);

  if (!updatedAt) {
    res.status(400).json({ message: 'La fecha de actualización es requerida' });
    return;
  }

  const userDate = new Date(updatedAt);
  if (isNaN(userDate.getTime())) {
    res.status(400).json({ message: 'La fecha/hora proporcionada no es válida' });
    return;
  }

  try {
    // Llamar a la función para actualizar el nombre del usuario
    const response = await registrarInicioAsignacion(+asignacionId,userDate);

    if (response.affectedRows === 0) {
      res.status(404).json({ message: 'Asignación no encontrada', status: 404 });
    } else {
      res.status(200).json({ message: 'Asignación actualizada con éxito', status: 200 });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la asignación', error: error, status: 500 });
  }
}

export default expressAsyncHandler(putIniciarAsignacionHandler)