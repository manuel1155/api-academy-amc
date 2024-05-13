import express, {} from "express"
import cors from 'cors'
import pingRouter from "../routers/ping.router"
import morgan from "morgan"
import errorHandler from "../middlewares/error-handler.middleware"

const setupExpressApp = () => {
  const app = express()

  app.use(cors({
    exposedHeaders: ['*', 'X-Total-Pages']
  }))
  app.use(express.json())
  //app.use(morgan('combined'))
  
  app.use('/ping', pingRouter)
    
  app.use(errorHandler)
  
  let { PORT: port } = process.env
  port = port || '3001'
  app.listen(+port, () => {
    console.log(' Server is listen on port: ', port)
  })
}

export default setupExpressApp