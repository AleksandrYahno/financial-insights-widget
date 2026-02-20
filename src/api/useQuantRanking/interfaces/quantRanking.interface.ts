export interface IQuantRankingRank {
  rank: number;
  total: number;
}

export type IQuantRankingRankings = Record<string, IQuantRankingRank>;

export interface IQuantRanking {
  sector: string;
  industry: string;
  rankings: IQuantRankingRankings;
}
