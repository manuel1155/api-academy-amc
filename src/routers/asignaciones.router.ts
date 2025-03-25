import { Router } from "express";

import putIniciarAsignacionHandler from "../handlers/asignacion/put-asignacion-iniciar.handler";
import postInicioModuloHandler from "../handlers/asignacion/post-inicio-modulo.handler";
import postInicioSubmoduloHandler from "../handlers/asignacion/post-inicio-submodulo.handler";

const asignacionesRouter = Router()

asignacionesRouter.put('/:id/iniciar', putIniciarAsignacionHandler);
asignacionesRouter.post('/:idAsig/modulo/:idModulo/iniciar', postInicioModuloHandler);
asignacionesRouter.post('/:idAsig/submodulo/:idSubmodulo/iniciar', postInicioSubmoduloHandler);

export default asignacionesRouter