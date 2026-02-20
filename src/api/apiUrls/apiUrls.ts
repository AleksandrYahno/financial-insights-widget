import { IApiEndpoints } from '@api/apiUrls/apiUrls.interface';

const apiUrls: IApiEndpoints = {
  user: () => '/user',
  ratingsSummary: () => '/ratings-summary',
  factorGradesNow: () => '/factor-grades/now',
  factorGrades3m: () => '/factor-grades/3m',
  factorGrades6m: () => '/factor-grades/6m',
  quantRanking: () => '/quant-ranking',
};

export default apiUrls;
