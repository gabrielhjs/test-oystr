import cors from "cors"
import dotenv from "dotenv"

import { app } from "./app"


dotenv.config()


app.use(cors({ origin: process.env.APP_URL }))
app.listen(process.env.PORT || 3000)
