import { describe, it, expect } from 'vitest';

import {
  mergeFactorGrades,
  sixMToMap,
} from './factorGradesCardVM.helper';

describe('factorGradesCardVM.helper', () => {
  describe('sixMToMap', () => {
    it('converts data array to key-value map', () => {
      const data = {
        data: [
          ['Valuation', 'F'],
          ['Growth', 'D-'],
        ] as [string, string][],
      };

      const result = sixMToMap(data);

      expect(result).toEqual({ Valuation: 'F', Growth: 'D-' });
    });

    it('returns empty object for empty data', () => {
      const result = sixMToMap({ data: [] });

      expect(result).toEqual({});
    });
  });

  describe('mergeFactorGrades', () => {
    it('merges now, 3m, 6m into rows with factorKey and grades', () => {
      const now = {
        Valuation: { current: 'F' },
        Growth: { current: 'D-' },
      };
      const threeM = { Valuation: 'F', Growth: 'C-' };
      const sixM = { Valuation: 'F', Growth: 'D' };

      const result = mergeFactorGrades(now, threeM, sixM);

      expect(result.length).toBeGreaterThanOrEqual(2);
      const valuation = result.find((r) => r.factorKey === 'valuation');

      expect(valuation).toEqual({
        factorKey: 'valuation',
        now: 'F',
        threeM: 'F',
        sixM: 'F',
      });
      const growth = result.find((r) => r.factorKey === 'growth');

      expect(growth).toEqual({
        factorKey: 'growth',
        now: 'D-',
        threeM: 'C-',
        sixM: 'D',
      });
    });

    it('uses fallback dash when grade is missing', () => {
      const now = { Valuation: { current: 'F' } };
      const threeM = {};
      const sixM = {};

      const result = mergeFactorGrades(now, threeM, sixM);

      const valuation = result.find((r) => r.factorKey === 'valuation');

      expect(valuation?.now).toBe('F');
      expect(valuation?.threeM).toBe('—');
      expect(valuation?.sixM).toBe('—');
    });
  });
});
