import { IApiConfig } from '@api/config/apiConfig.interface';

const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  'https://seekingalpha.free.beeceptor.com';

export const apiConfig: IApiConfig = {
  baseUrl: API_BASE_URL,
};
