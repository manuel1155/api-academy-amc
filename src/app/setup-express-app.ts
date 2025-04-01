import express, {} from "express"
import cors from 'cors'
import pingRouter from "../routers/ping.router"
import errorHandler from "../middlewares/error-handler.middleware"
import alumnosRouter from "../routers/alumnos.routes"
import subModulosRouter from "../routers/submodulos.router"
import cusrosRouter from "../routers/cursos.router"
import asignacionesRouter from "../routers/asignaciones.router"

const setupExpressApp = () => {
  const app = express()

  app.use(cors({
    exposedHeaders: ['*', 'X-Total-Pages']
  }))
  app.use(express.json())
  //app.use(morgan('combined'))
  
  app.use('/ping', pingRouter)
  app.use('/cursos', cusrosRouter)
  app.use('/alumnos', alumnosRouter)
  app.use('/submodulos', subModulosRouter)
  app.use('/asignacion', asignacionesRouter)
    
  app.use(errorHandler)
  
  let { PORT: port } = process.env
  port = port || '3001'
  app.listen(+port, "0.0.0.0", () => {
    console.log(' Server is listen on port: ', port)
  })
}

export default setupExpressApp