import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { log } from "console"
import { registrarInicioSubmodulo } from "../../services/asignaciones/registrar-inicio-submodulo.service"

const postInicioSubmoduloHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting postInicioSubmoduloHandler')
  const asignacionId = req.params.idAsig;
  const submoduloId = req.params.idSubmodulo;
  const { updatedAt } = req.body;
  log(' - asignacionId', asignacionId);
  log(' - submoduloId', submoduloId);
  log(' - updatedAt', updatedAt);

  if (!asignacionId ||!submoduloId) {
    res.status(400).json({ message: 'Los parámetros idAsignacion y idSubmodulo son requeridos' });
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
    const idRegMod = await registrarInicioSubmodulo(+asignacionId, +submoduloId, userDate);

    res.status(201).json({ 
        message: 'Registro de inicio de submodulo exitoso', 
        data: { id: idRegMod, idAsignacion: asignacionId, idSubmodulo: submoduloId, f_inicio: userDate} 
    });
  } catch (error) {
    console.error('Error al registrar el inicio de un submodulo:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export default expressAsyncHandler(postInicioSubmoduloHandler)