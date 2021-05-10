import { AxiosProvider } from "../../providers/ipInfoProvider/implements/axiosProvider";
import { IpInfoController } from "./ipInfoController";
import { IpInfoUseCase } from "./ipInfoUseCase";


const ipInfoProvider = new AxiosProvider()
const ipInfoUseCase = new IpInfoUseCase(ipInfoProvider)
const ipInfoController = new IpInfoController(ipInfoUseCase)

export { ipInfoController }
