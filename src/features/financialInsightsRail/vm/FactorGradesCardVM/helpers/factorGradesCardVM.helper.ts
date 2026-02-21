import { IFactorGradesCardRow } from '@components/factorGradesCard/factorGradesCard.interface';

const FACTOR_KEYS_CONFIG: { apiKeys: string[]; factorKey: string }[] = [
  { apiKeys: ['Valuation', 'valuation'], factorKey: 'valuation' },
  { apiKeys: ['Growth', 'growth'], factorKey: 'growth' },
  { apiKeys: ['Profitability', 'profitability'], factorKey: 'profitability' },
  { apiKeys: ['Momentum', 'momentum'], factorKey: 'momentum' },
  { apiKeys: ['Revisions', 'revisions'], factorKey: 'revisions' },
];

const sixMToMap = (
  data: { data: [string, string][] },
): Record<string, string> => {
  const map: Record<string, string> = {};
  data.data.forEach(([key, value]) => {
    map[key] = value;
  });

  return map;
};

const pickGrade = (
  source: Record<string, string>,
  apiKeys: string[],
): string => {
  const key = apiKeys.find((k) => source[k] != null);

  return key != null ? source[key] : '—';
};

const pickNowGrade = (
  source: Record<string, { current: string }>,
  apiKeys: string[],
): string => {
  const key = apiKeys.find((k) => source[k] != null);

  return key != null ? (source[key]?.current ?? '—') : '—';
};

const mergeFactorGrades = (
  now: Record<string, { current: string }>,
  threeM: Record<string, string>,
  sixM: Record<string, string>,
): IFactorGradesCardRow[] =>
  FACTOR_KEYS_CONFIG.map(({ apiKeys, factorKey }) => ({
    factorKey,
    now: pickNowGrade(now, apiKeys),
    threeM: pickGrade(threeM, apiKeys),
    sixM: pickGrade(sixM, apiKeys),
  }));

export { mergeFactorGrades, sixMToMap };
