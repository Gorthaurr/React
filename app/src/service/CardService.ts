import { CardResponse } from '../models/response/CardResponse';
import { CardContentResponse } from '../models/response/CardContentResponse';
import $api from "../http/index"
import {AxiosResponse} from 'axios'
import { AllCategory } from '../models/response/AllCategory';


export default class CardService {
    static fetchCards(): Promise<AxiosResponse<CardResponse[]>> {
        return $api.get<CardResponse[]>(`/cards`)
    }

    static fetchCardContent(id: number):  Promise<AxiosResponse<CardContentResponse[]>> {
        return $api.get<CardContentResponse[]>(`/cards/${id}`)
    }

    static fetchAllCategories(): Promise<AxiosResponse<AllCategory[]>> {
        return $api.get<AllCategory[]>(`/categories`)
    }
}
    
    