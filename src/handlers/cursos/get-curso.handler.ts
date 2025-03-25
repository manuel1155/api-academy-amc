import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { JSON } from "../../constants/mime-types.constants"
import { log } from "console"
import { obtenerDetallesCurso } from "../../services/cursos/obtener-detalles-curso.service"

const getCursoHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting getCursosHandler')
  const cursoId = req.params.id;
  log(' - cursoId', cursoId)
  const response = await obtenerDetallesCurso(+cursoId)

  res.contentType(JSON).send(response)
}

export default expressAsyncHandler(getCursoHandler)