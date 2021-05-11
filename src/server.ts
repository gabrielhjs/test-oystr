import cors from "cors"
import dotenv from "dotenv"

import { app } from "./app"


dotenv.config()


app.use(cors({ origin: process.env.APP_URL }))
app.listen(3000, "0.0.0.0")
