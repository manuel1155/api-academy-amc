import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { JSON } from "../../constants/mime-types.constants"
import { log } from "console"
import { obtenerRecusrosSubmodulo } from "../../services/submodulos/obtener-recursos-submodulo.service"

const getRecursosInfoHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting getModulosInfo handler') 
  const subModId = req.params.id;
  log(' - subModId', subModId)

  const response = await obtenerRecusrosSubmodulo(+subModId)

  res.contentType(JSON).send(response)
}

export default expressAsyncHandler(getRecursosInfoHandler)