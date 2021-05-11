import { Request, Response } from "express"

import { IController } from "../interfaces/IController"
import { IUseCase } from "../interfaces/IUseCase"


export class IpInfoController implements IController {
	constructor(
		private useCase: IUseCase,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {

		try {
			const reponse = await this.useCase.execute({})

			if (reponse.error) {
				return response.status(400).send({ error: reponse.error })
			}

			return response.status(200).send(reponse.data)
		}

		catch (error) {
			console.log(`ERROR: ${error.message}`)
			return response.status(400).send({ error: "Unexpected Error." })
		}

	}
}