import { Router } from "express"
import { ipInfoController } from "."


const ipInfoRouter = Router()


ipInfoRouter.get("/", (request, response) => {
	return ipInfoController.handle(request, response)
})


export { ipInfoRouter }
