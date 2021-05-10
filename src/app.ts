import express from "express"
import { router } from "./routes"
import { ipInfoRouter } from "./useCases/ipInfo/ipInfoRoutes"


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/", router)
app.use("/", ipInfoRouter)

export { app }
