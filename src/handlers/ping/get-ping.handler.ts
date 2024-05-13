import { RequestHandler } from "express"
import expressAsyncHandler from "express-async-handler"
import { createPing } from "../../services/ping/create-ping.service"
import { JSON } from "../../constants/mime-types.constants"
import { log } from "console"

const getPingHandler: RequestHandler = async (req, res, next) => {
  log(' - Starting get ping handler') 
  const userAgent = req.get('User-Agent')

  const { remoteAddress = '' } = req.socket
  log( 'remoteAddress', remoteAddress)

  const ping = await createPing(userAgent, remoteAddress)
  const { id, createdAt } = ping

  res.contentType(JSON).send({ id, userAgent, createdAt, remoteAddress })
}

export default expressAsyncHandler(getPingHandler)