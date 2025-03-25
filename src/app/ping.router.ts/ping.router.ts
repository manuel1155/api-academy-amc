import { Router } from "express";
import getPingHandler from "../../handlers/ping/get-ping.handler";
const pingRouter: Router = Router()

pingRouter.get('/', /*authenticationMiddleware, authorizationMiddleware('PERM_UT_MEPEOPERSONAL') ,*/getPingHandler)

export default pingRouter