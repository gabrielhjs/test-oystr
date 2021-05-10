"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpInfoUseCase = void 0;
class IpInfoUseCase {
    constructor(getIpInfoProvider) {
        this.getIpInfoProvider = getIpInfoProvider;
    }
    async execute(data) {
        const ipInfo = await this.getIpInfoProvider.execute(`http://api.ipstack.com/check?access_key=${process.env.ACCESS_KEY}`);
        if (ipInfo.hasOwnProperty("data")) {
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
            error: "Failed to request to ipstack"
        };
    }
}
exports.IpInfoUseCase = IpInfoUseCase;
