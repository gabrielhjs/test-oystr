import cors from "cors"
import dotenv from "dotenv"

import { app } from "./app"


dotenv.config()


app.use(cors({ origin: process.env.APP_URL }))
app.listen(parseInt(process.env.PORT || "3000"), process.env.HOST || "0.0.0.0")
