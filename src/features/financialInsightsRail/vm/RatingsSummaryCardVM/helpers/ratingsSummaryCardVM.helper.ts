import { IRatingsSummaryCardRow } from '@components/ratingsSummaryCard/ratingsSummaryCard.interface';

const formatSourceKey = (key: string): string => key.replace(/_/g, ' ');

const mapToRows = (
  summary: Record<string, { rating: string; score: number }>,
): IRatingsSummaryCardRow[] =>
  Object.entries(summary).map(([key, block]) => ({
    source: formatSourceKey(key),
    rating: block.rating,
    score: block.score,
  }));

export { mapToRows };
