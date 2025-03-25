import { Router } from "express";
import getModulosInfoHandler from "../handlers/modulos/get-modulos-info.handler";
import getCursosHandler from "../handlers/cursos/get-cursos.handler";
import getCursoHandler from "../handlers/cursos/get-curso.handler";
import getModuloInfoHandler from "../handlers/modulos/get-modulo-info.handler";
import getModSubDetInfoHandler from "../handlers/modulos/get-mod-sub-det-info.handler";

const cursosRouter = Router();

cursosRouter.get('/', getCursosHandler );
cursosRouter.get('/:id', getCursoHandler );
cursosRouter.get('/:id/modulos', getModulosInfoHandler );
cursosRouter.get('/:idCurso/asignacion/:idAsig/modulos/:idModulo', getModuloInfoHandler );
cursosRouter.get('/:idCurso/asignacion/:idAsig/detalles',getModSubDetInfoHandler);

export default cursosRouter;