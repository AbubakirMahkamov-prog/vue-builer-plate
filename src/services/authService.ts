import httpClient from "./httpClient";
import type { ILogin } from "../types/api/auth/type";
const END_POINT = '/auth'


class AuthService { 
    login (data: ILogin) {
        return httpClient.post(END_POINT + '/login', data).then((res: any) => {
            return res.data
          })
    }
}


export default new AuthService();