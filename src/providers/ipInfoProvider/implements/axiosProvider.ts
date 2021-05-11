import { IGetIpConfigProvider } from "../IGetIpInfoProvider"
import request from "axios"


export class AxiosProvider implements IGetIpConfigProvider {
	async execute(): Promise<any> {
		return await request.get(`http://api.ipstack.com/check?access_key=${process.env.ACCESS_KEY}`)
	}
}