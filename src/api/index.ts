export { apiConfig } from '@api/config/apiConfig';
export type { IApiConfig } from '@api/config/apiConfig.interface';
export { default as apiUrls } from '@api/apiUrls/apiUrls';
export type { IApiEndpoints } from '@api/apiUrls/apiUrls.interface';
export { buildFullUrl } from '@api/helpers/buildFullUrl.helper';
export { FetchHttpClient } from '@api/httpClient/httpClient';
export type { IHttpClient } from '@api/httpClient/interfaces/httpClient.interface';
export type {
  IGetRequestOptions,
  IPostRequestOptions,
  IPatchRequestOptions,
  IPutRequestOptions,
  IDeleteRequestOptions,
  IRequestConfig,
  IRequestOptions,
} from '@api/httpClient/interfaces/requests.interface';
export type { IApiResponse } from '@api/httpClient/interfaces/responses.interface';

export { useUser } from '@api/useUser/useUser';
export type { IUser } from '@api/useUser/interfaces/user.interface';
export { useRatingsSummary } from '@api/useRatingsSummary/useRatingsSummary';
export type { IRatingsSummary, IRatingBlock } from '@api/useRatingsSummary/interfaces/ratingsSummary.interface';
export { useFactorGradesNow } from '@api/useFactorGradesNow/useFactorGradesNow';
export type { IFactorGradesNow, IFactorGradeNowItem } from '@api/useFactorGradesNow/interfaces/factorGrades.interface';
export { useFactorGrades3m } from '@api/useFactorGrades3m/useFactorGrades3m';
export type { IFactorGrades3m } from '@api/useFactorGrades3m/interfaces/factorGrades.interface';
export { useFactorGrades6m } from '@api/useFactorGrades6m/useFactorGrades6m';
export type { IFactorGrades6m } from '@api/useFactorGrades6m/interfaces/factorGrades.interface';
export { useQuantRanking } from '@api/useQuantRanking/useQuantRanking';
export type {
  IQuantRanking,
  IQuantRankingRank,
  IQuantRankingRankings,
} from '@api/useQuantRanking/interfaces/quantRanking.interface';

import { apiConfig } from '@api/config/apiConfig';
import { FetchHttpClient } from '@api/httpClient/httpClient';
import { IHttpClient } from '@api/httpClient/interfaces/httpClient.interface';

const defaultHttpClient: IHttpClient = new FetchHttpClient(apiConfig.baseUrl);

export { defaultHttpClient as httpClient };
