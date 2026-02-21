import { describe, it, expect } from 'vitest';

import { mapToRows } from './ratingsSummaryCardVM.helper';

describe('ratingsSummaryCardVM.helper', () => {
  describe('mapToRows', () => {
    it('maps summary entries to rows with source, rating, score', () => {
      const summary = {
        SA_Analysts: { rating: 'HOLD', score: 3.0 },
        Wall_Street: { rating: 'BUY', score: 4.13 },
        Quant: { rating: 'HOLD', score: 3.47 },
      };

      const result = mapToRows(summary);

      expect(result).toHaveLength(3);
      expect(result).toContainEqual({
        source: 'SA Analysts',
        rating: 'HOLD',
        score: 3.0,
      });
      expect(result).toContainEqual({
        source: 'Wall Street',
        rating: 'BUY',
        score: 4.13,
      });
      expect(result).toContainEqual({
        source: 'Quant',
        rating: 'HOLD',
        score: 3.47,
      });
    });

    it('replaces underscores with spaces in source keys', () => {
      const summary = {
        some_key: { rating: 'A', score: 1 },
      };

      const result = mapToRows(summary);

      expect(result[0].source).toBe('some key');
    });

    it('returns empty array for empty summary', () => {
      const result = mapToRows({});

      expect(result).toEqual([]);
    });
  });
});
