import { describe, it, expect } from 'vitest';

import { mapRankings } from './quantRankingCardVM.helper';

describe('quantRankingCardVM.helper', () => {
  describe('mapRankings', () => {
    it('maps lowercase keys to rankedOverall, rankedInSector, rankedInIndustry', () => {
      const rankings = {
        overall: { rank: 825, total: 4455 },
        sector: { rank: 105, total: 552 },
        industry: { rank: 8, total: 28 },
      };

      const result = mapRankings(rankings);

      expect(result.rankedOverall).toEqual({ rank: 825, total: 4455 });
      expect(result.rankedInSector).toEqual({ rank: 105, total: 552 });
      expect(result.rankedInIndustry).toEqual({ rank: 8, total: 28 });
    });

    it('maps PascalCase keys when lowercase are missing', () => {
      const rankings = {
        Overall: { rank: 1, total: 10 },
        Sector: { rank: 2, total: 20 },
        Industry: { rank: 3, total: 30 },
      };

      const result = mapRankings(rankings);

      expect(result.rankedOverall).toEqual({ rank: 1, total: 10 });
      expect(result.rankedInSector).toEqual({ rank: 2, total: 20 });
      expect(result.rankedInIndustry).toEqual({ rank: 3, total: 30 });
    });

    it('returns default rank (0, 0) when key is missing', () => {
      const rankings = { overall: { rank: 1, total: 10 } };

      const result = mapRankings(rankings);

      expect(result.rankedOverall).toEqual({ rank: 1, total: 10 });
      expect(result.rankedInSector).toEqual({ rank: 0, total: 0 });
      expect(result.rankedInIndustry).toEqual({ rank: 0, total: 0 });
    });

    it('returns default ranks for empty rankings', () => {
      const result = mapRankings({});

      expect(result.rankedOverall).toEqual({ rank: 0, total: 0 });
      expect(result.rankedInSector).toEqual({ rank: 0, total: 0 });
      expect(result.rankedInIndustry).toEqual({ rank: 0, total: 0 });
    });
  });
});
