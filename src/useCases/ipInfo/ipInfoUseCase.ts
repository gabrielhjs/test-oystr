import { IGetIpConfigProvider } from "../../providers/ipInfoProvider/IGetIpInfoProvider"
import { IDTO } from "../interfaces/IDTO"
import { IUseCase, IUseCaseResponse } from "../interfaces/IUseCase"


export class IpInfoUseCase implements IUseCase {
	constructor(
		private getIpInfoProvider: IGetIpConfigProvider,
	) { }

	async execute(data: IDTO): Promise<IUseCaseResponse> {
		const ipInfo = await this.getIpInfoProvider.execute(
			`http://api.ipstack.com/check?access_key=${process.env.ACCESS_KEY}`
		)

		if (ipInfo.hasOwnProperty("data") && ipInfo.data.success) {
			if (ipInfo.data.hasOwnProperty("ip") && ipInfo.data.hasOwnProperty("city")) {
				return {
					data: `IP: ${ipInfo.data.ip} - CITY: ${ipInfo.data.city}`,
					error: false
				}
			}
			return {
				error: "Ip and/or city not find"
			}
		}

		return {
			error: ipInfo.data.error.info
		}
	}
}