import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { JSON } from "../../../constants/mime-types.constants"
import { log } from "console"
import { obtenerCursosAlumno } from "../../../services/alumnos/cursos/obtener-cursos-by-alumno.services"

const getCursosAlumnosHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting getCursosAlumnosHandler') 
  const alumnoId = req.params.id;
  log(' - alumnoId', alumnoId)

  const response = await obtenerCursosAlumno(alumnoId)

  res.contentType(JSON).send(response)
}

export default expressAsyncHandler(getCursosAlumnosHandler)