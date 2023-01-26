import { API_URL } from './../http/index';
import { AuthResponse } from './../models/response/AuthResponse';
import { IUser } from './../models/IUser';
import { makeAutoObservable } from "mobx"
import AuthService from '../../../app/src/service/AuthService';
import axios from 'axios';

export default class Store {
    user = {} as IUser 
    isAuth = false
    isLoading = false
    isClickLogin = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool  
    }

    setUser(user: IUser) {
        this.user = user
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    setClickLogin(bool: boolean) {
        this.isClickLogin = bool
    }

    async login(email: string, password: string) {
        try{
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }
        catch(e: any)
        {  
            console.log('Пошёл нахуй')
            console.log(e.reponse?.data?.message)
        }

    }

    async registration(email: string, password: string) {
        try{
            const response = await AuthService.registration(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }
        catch(e: any)
        {   
            console.log(e.reponse?.data?.message)
        }

    }

    async logout() {
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setClickLogin(true)
            this.setUser({} as IUser)
        }
        catch(e: any)
        {
            console.log(e.reponse?.data?.message)
        }

    }

    async checkAuth() {
        try{
            this.setLoading(true)
            const response = await axios.get<AuthResponse>(`${API_URL}refresh`, {withCredentials: true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        }
        catch(e: any){
            console.log(e.reponse?.data?.message)
        }
        finally {
            this.setLoading(false)
        }
    }
}