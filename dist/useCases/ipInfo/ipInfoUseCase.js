"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpInfoUseCase = void 0;
class IpInfoUseCase {
    constructor(getIpInfoProvider) {
        this.getIpInfoProvider = getIpInfoProvider;
    }
    async execute(data) {
        const ipInfo = await this.getIpInfoProvider.execute();
        if (!ipInfo.data.error) {
            if (ipInfo.data.hasOwnProperty("ip") && ipInfo.data.hasOwnProperty("city")) {
                return {
                    data: `IP: ${ipInfo.data.ip} - CITY: ${ipInfo.data.city}`,
                    error: false
                };
            }
            return {
                error: "Ip and/or city not find"
            };
        }
        return {
            error: ipInfo.data.error
        };
    }
}
exports.IpInfoUseCase = IpInfoUseCase;
