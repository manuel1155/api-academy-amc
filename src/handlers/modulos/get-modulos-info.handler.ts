import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { JSON } from "../../constants/mime-types.constants"
import { log } from "console"
import { obtenerModulosSubById } from "../../services/modulos/get-mudulos-sub-by-curso.service"

const getModulosInfoHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting getModulosInfo handler') 
  const cursoId = req.params.id;
  log(' - cursoId', cursoId)

  const response = await obtenerModulosSubById(+cursoId)

  res.contentType(JSON).send(response)
}

export default expressAsyncHandler(getModulosInfoHandler)