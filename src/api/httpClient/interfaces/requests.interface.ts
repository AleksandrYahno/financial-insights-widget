export interface IRequestConfig {
  signal?: AbortSignal;
  headers?: Record<string, string>;
}

export interface IRequestOptions {
  url: string;
  config?: IRequestConfig;
}

export type IGetRequestOptions = IRequestOptions;

export interface IPostRequestOptions<K> extends IRequestOptions {
  postData?: K;
}

export interface IPatchRequestOptions<K> extends IRequestOptions {
  patchData: K;
}

export interface IPutRequestOptions<K> extends IRequestOptions {
  putData?: K;
}

export type IDeleteRequestOptions = IRequestOptions;
