import { IGetIpConfigProvider } from "../IGetIpInfoProvider"
import request from "axios"


export class AxiosProvider implements IGetIpConfigProvider {
	async execute(url: string): Promise<any> {
		return await request.get(url)
	}
}