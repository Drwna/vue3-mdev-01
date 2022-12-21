import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import MockMethod from "@/mock/index"; // mock接口定义的地址
//import MockMethod from "../../mocks/user/index";
//export const mockModules = [...MockMethod, ...MockMethod2]
export const mockModules = [...MockMethod]
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
