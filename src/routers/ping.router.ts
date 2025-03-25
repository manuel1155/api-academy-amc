import { Router } from "express";
import getPingHandler from "../handlers/ping/get-ping.handler";

const pingRouter = Router()

pingRouter.get('/', getPingHandler )
pingRouter.post('/',)

export default pingRouter