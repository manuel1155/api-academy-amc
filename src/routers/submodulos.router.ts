import { Router } from "express";
import getRecursosInfoHandler from "../handlers/submodulos/get-recusros-info.handler";

const subModulosRouter = Router();

subModulosRouter.get('/:id/recursos', getRecursosInfoHandler );

export default subModulosRouter;