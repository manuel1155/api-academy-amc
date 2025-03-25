import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { JSON } from "../../constants/mime-types.constants"
import { log } from "console"
import { obtenerModSubConDetByIdCurso } from "../../services/modulos/obtener-mod-sub-con-detalles.service"

const getModSubDetInfoHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting getModSubDetInfoHandler') 
  const cursoId = req.params.idCurso;
  const asigId = req.params.idAsig;
  log(' - cursoId', cursoId)
  log(' - asigId', asigId)

  const response = await obtenerModSubConDetByIdCurso(+cursoId, +asigId);

  res.contentType(JSON).send(response)
}

export default expressAsyncHandler(getModSubDetInfoHandler)