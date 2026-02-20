import {
  IDeleteRequestOptions,
  IGetRequestOptions,
  IPatchRequestOptions,
  IPostRequestOptions,
  IPutRequestOptions,
} from '@api/httpClient/interfaces/requests.interface';
import { IApiResponse } from '@api/httpClient/interfaces/responses.interface';

export interface IHttpClient {
  get<T>(requestConfig: IGetRequestOptions): Promise<IApiResponse<T>>;
  post<T, K>(requestConfig: IPostRequestOptions<K>): Promise<IApiResponse<T>>;
  patch<T, K>(requestConfig: IPatchRequestOptions<K>): Promise<IApiResponse<T>>;
  put<T, K>(requestConfig: IPutRequestOptions<K>): Promise<IApiResponse<T>>;
  delete<T>(requestConfig: IDeleteRequestOptions): Promise<IApiResponse<T>>;
}
