export interface IApiResponse<T> {
  data: T;
  status: number;
  headers: Record<string, string> | null;
}
