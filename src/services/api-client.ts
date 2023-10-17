import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '5db6271fc9d14fb0a22c90d09dc2f5f2'
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig)=>{
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then(res => res.data)
    }

    post = (data: T) =>{
    return axiosInstance.post<FetchResponse<T>>(this.endpoint, data).then(res => data)
    }
}

export default APIClient;
