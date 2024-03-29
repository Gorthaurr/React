import axios from 'axios';
import { AuthResponse } from './../models/response/AuthResponse';

export const API_URL = 'http://localhost:5000/'

const $api = axios.create({
    withCredentials: true, //цеплять куки по запросу
    baseURL: API_URL 
})// создаём инстанс axios 

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config   //проверка авторизации
});

$api.interceptors.request.use((config: any) => {
    return config  
}, async (error) => {
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try{
        const response = await axios.get<AuthResponse>(`${API_URL}refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
        }
        catch(e) {
            console.log('Не авторизован')
        }
    }
    throw error
});

export default $api