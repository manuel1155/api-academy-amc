import { Router } from "express";
import getCursosAlumnosHandler from "./../handlers/alumnos/cursos/get-cursos-alumno.handler";

const alumnosRouter = Router()

alumnosRouter.get('/:id/cursos', getCursosAlumnosHandler)

export default alumnosRouter