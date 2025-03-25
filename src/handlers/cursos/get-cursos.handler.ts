import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { log } from "console"
import { obtenerCursos } from "../../services/cursos/obtener-cursos.service"

const getCursosHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting getCursosHandler')

  const response = await obtenerCursos()

  res.send(response.data)
}

export default expressAsyncHandler(getCursosHandler)