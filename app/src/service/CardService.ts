import { CardResponse } from '../models/response/CardResponse';
import $api from "../http/index"
import {AxiosResponse} from 'axios'



export default class CardService {
    static fetchCards(): Promise<AxiosResponse<CardResponse[]>> {
        return $api.get<CardResponse[]>(`/cards`)
    }

    static fetchCardContent(id: number):  Promise<AxiosResponse<CardResponse[]>> {
        return $api.get<CardResponse[]>(`/cards/${id}`)
    }
}
    
    