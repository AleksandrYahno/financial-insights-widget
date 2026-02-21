export interface IQuantRankingCardRank {
  rank: number;
  total: number;
}

export interface IQuantRankingCardProps {
  sector: string;
  industry: string;
  rankedOverall: IQuantRankingCardRank;
  rankedInSector: IQuantRankingCardRank;
  rankedInIndustry: IQuantRankingCardRank;
}
