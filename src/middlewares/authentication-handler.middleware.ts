import { log } from "console"
import { RequestHandler } from "express"

const authenticationMiddleware: RequestHandler = (req, res, next) => {
  log( ' - Start dummy authentication middleware ')
  log(' - Validating authentication ')  

  const userId = req.get('X-User-Id')
  if (!userId) {
    return next({ type: '401' })
  }

  req.user = { id: userId }

  next()
}

export default authenticationMiddleware