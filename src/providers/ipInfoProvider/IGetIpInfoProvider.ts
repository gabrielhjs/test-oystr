

export interface IGetIpConfigProvider {
	execute(url: string): Promise<any>
}