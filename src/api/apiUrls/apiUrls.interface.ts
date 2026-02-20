export interface IApiEndpoints {
  user: () => string;
  ratingsSummary: () => string;
  factorGradesNow: () => string;
  factorGrades3m: () => string;
  factorGrades6m: () => string;
  quantRanking: () => string;
}
