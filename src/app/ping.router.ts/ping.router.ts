import { Router } from "express";
import getPingHandler from "../handlers/ping/get-ping.handler";
import authenticationMiddleware from "../middlewares/authentication-handler.middleware";
import authorizationMiddleware from "../middlewares/authorization.middleware";

const pingRouter: Router = Router()

pingRouter.get('/', /*authenticationMiddleware, authorizationMiddleware('PERM_UT_MEPEOPERSONAL') ,*/getPingHandler)

export default pingRouter