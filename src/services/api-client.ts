import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '5db6271fc9d14fb0a22c90d09dc2f5f2'
    }
})