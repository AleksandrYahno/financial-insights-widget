export interface IRatingsSummaryCardRow {
  source: string;
  rating: string;
  score: number;
}

export interface IRatingsSummaryCardProps {
  rows: IRatingsSummaryCardRow[];
}
