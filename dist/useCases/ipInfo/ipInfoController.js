"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpInfoController = void 0;
class IpInfoController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const reponse = await this.useCase.execute({});
            if (reponse.error) {
                return response.status(400).send({ error: reponse.error });
            }
            return response.status(200).send(reponse.data);
        }
        catch (error) {
            console.log(error.message);
            return response.status(400).send({ error: "Unexpected Error." });
        }
    }
}
exports.IpInfoController = IpInfoController;
