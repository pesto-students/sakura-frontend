import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { from, Observable } from 'rxjs';


type apiErrorStructure = {
    message: string,
    status: number,
    timestamp: string,
    path: string
}


type apiReturnStructure<R> = {
    error: apiErrorStructure | null,
    data: R
}

export type ApiResponseObservable<T> = Observable<AxiosResponse<apiReturnStructure<T>>>;

export function getHttp<T>(url: string, config?: AxiosRequestConfig): ApiResponseObservable<T> {
    const result = axios.get<apiReturnStructure<T>>(url, config);
    return from(result);
}


export function postHttp<T>(url: string, data: any, config?: AxiosRequestConfig): ApiResponseObservable<T> {
    const result = axios.post<apiReturnStructure<T>>(url, data, config);
    return from(result);
}