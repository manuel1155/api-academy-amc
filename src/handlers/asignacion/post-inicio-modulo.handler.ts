import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { log } from "console"
import { registrarInicioModulo } from "../../services/asignaciones/registrar-inicio-modulo.service"

const postInicioModuloHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting postInicioModuloHandler')
  const asignacionId = req.params.idAsig;
  const moduloId = req.params.idModulo;
  const { updatedAt } = req.body;
  log(' - asignacionId', asignacionId);
  log(' - moduloId', moduloId);
  log(' - updatedAt', updatedAt);

  if (!asignacionId ||!moduloId) {
    res.status(400).json({ message: 'Los parámetros idAsignacion y idModulo son requeridos' });
    return;
  }

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
    const idRegMod = await registrarInicioModulo(+asignacionId, +moduloId, userDate);

    res.status(201).json({ 
        message: 'Registro de inicio de modulo exitoso', 
        data: { id: idRegMod, idAsignacion: asignacionId, idModulo: moduloId, f_inicio: userDate} 
    });
  } catch (error) {
    console.error('Error al registrar el inicio de un modulo:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export default expressAsyncHandler(postInicioModuloHandler)