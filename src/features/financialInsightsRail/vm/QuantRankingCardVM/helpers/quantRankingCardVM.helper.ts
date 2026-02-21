import { IQuantRankingCardRank } from '@components/quantRankingCard/quantRankingCard.interface';

const defaultRank: IQuantRankingCardRank = { rank: 0, total: 0 };

const RANKING_KEYS: Record<
  'rankedOverall' | 'rankedInSector' | 'rankedInIndustry',
  string[]
> = {
  rankedOverall: ['overall', 'Overall'],
  rankedInSector: ['sector', 'Sector'],
  rankedInIndustry: ['industry', 'Industry'],
};

const pickRank = (
  rankings: Record<string, { rank: number; total: number }>,
  ...keys: string[]
): IQuantRankingCardRank =>
  keys.map((key) => rankings[key]).find((x) => x != null) ?? defaultRank;

const mapRankings = (
  rankings: Record<string, { rank: number; total: number }>,
): {
  rankedOverall: IQuantRankingCardRank;
  rankedInSector: IQuantRankingCardRank;
  rankedInIndustry: IQuantRankingCardRank;
} => ({
  rankedOverall: pickRank(rankings, ...RANKING_KEYS.rankedOverall),
  rankedInSector: pickRank(rankings, ...RANKING_KEYS.rankedInSector),
  rankedInIndustry: pickRank(rankings, ...RANKING_KEYS.rankedInIndustry),
});

export { mapRankings };
