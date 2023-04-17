import axios from 'axios'

export function createAxios(options:any){
    const defaultOtions = {
        timeout:12000,
    }
    const service = axios.create({
        ...defaultOtions,
        ...options,
    })
    service.interceptors.request.use()
    service.interceptors.response.use()
    return service
}

export const request = createAxios({

})