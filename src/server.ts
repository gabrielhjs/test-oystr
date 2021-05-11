import cors from "cors"
import dotenv from "dotenv"

import { app } from "./app"


dotenv.config()

const PORT = parseInt(process.env.PORT || "3000")
const HOST = "0.0.0.0"


app.use(cors({ origin: process.env.APP_URL }))
app.listen(PORT, HOST)
