import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { JSON } from "../../constants/mime-types.constants"
import { log } from "console"
import { obtenerDetallesModulo } from "../../services/modulos/get-detalles-modulo.service"

const getModuloInfoHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting getModuloInfo handler') 
  const cursoId = req.params.idCurso;
  const moduloId = req.params.idModulo;
  const asigId = req.params.idAsig;
  log(' - cursoId', cursoId)
  log(' - moduloId', moduloId)
  log(' - asigId', asigId)

  const response = await obtenerDetallesModulo(+cursoId, +moduloId, +asigId);

  res.contentType(JSON).send(response)
}

export default expressAsyncHandler(getModuloInfoHandler)