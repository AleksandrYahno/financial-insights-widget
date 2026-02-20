import { buildFullUrl } from '@api/helpers/buildFullUrl.helper';
import {
  IDeleteRequestOptions,
  IGetRequestOptions,
  IPatchRequestOptions,
  IPostRequestOptions,
  IPutRequestOptions,
} from '@api/httpClient/interfaces/requests.interface';
import { IApiResponse } from '@api/httpClient/interfaces/responses.interface';
import { IHttpClient } from '@api/httpClient/interfaces/httpClient.interface';

function headersToRecord(headers: Headers): Record<string, string> {
  const out: Record<string, string> = {};
  headers.forEach((value, key) => {
    out[key] = value;
  });

  return out;
}

async function parseResponseData<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    return (await response.json()) as T;
  }

  const text = await response.text();

  return text as unknown as T;
}

async function handleResponse<T>(response: Response): Promise<IApiResponse<T>> {
  const data = await parseResponseData<T>(response);

  return {
    data,
    status: response.status,
    headers: headersToRecord(response.headers),
  };
}

export class FetchHttpClient implements IHttpClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(requestConfig: IGetRequestOptions): Promise<IApiResponse<T>> {
    const url = buildFullUrl(this.baseUrl, requestConfig.url);
    const response = await fetch(url, {
      method: 'GET',
      signal: requestConfig.config?.signal,
      headers: requestConfig.config?.headers,
    });

    return handleResponse<T>(response);
  }

  async post<T, K>(requestConfig: IPostRequestOptions<K>): Promise<IApiResponse<T>> {
    const url = buildFullUrl(this.baseUrl, requestConfig.url);
    const response = await fetch(url, {
      method: 'POST',
      signal: requestConfig.config?.signal,
      headers: {
        'Content-Type': 'application/json',
        ...requestConfig.config?.headers,
      },
      body: requestConfig.postData != null ? JSON.stringify(requestConfig.postData) : undefined,
    });

    return handleResponse<T>(response);
  }

  async patch<T, K>(requestConfig: IPatchRequestOptions<K>): Promise<IApiResponse<T>> {
    const url = buildFullUrl(this.baseUrl, requestConfig.url);
    const response = await fetch(url, {
      method: 'PATCH',
      signal: requestConfig.config?.signal,
      headers: {
        'Content-Type': 'application/json',
        ...requestConfig.config?.headers,
      },
      body: JSON.stringify(requestConfig.patchData),
    });

    return handleResponse<T>(response);
  }

  async put<T, K>(requestConfig: IPutRequestOptions<K>): Promise<IApiResponse<T>> {
    const url = buildFullUrl(this.baseUrl, requestConfig.url);
    const response = await fetch(url, {
      method: 'PUT',
      signal: requestConfig.config?.signal,
      headers: {
        'Content-Type': 'application/json',
        ...requestConfig.config?.headers,
      },
      body: requestConfig.putData != null ? JSON.stringify(requestConfig.putData) : undefined,
    });

    return handleResponse<T>(response);
  }

  async delete<T>(requestConfig: IDeleteRequestOptions): Promise<IApiResponse<T>> {
    const url = buildFullUrl(this.baseUrl, requestConfig.url);
    const response = await fetch(url, {
      method: 'DELETE',
      signal: requestConfig.config?.signal,
      headers: requestConfig.config?.headers,
    });

    return handleResponse<T>(response);
  }
}
