export interface IRatingBlock {
  rating: string;
  score: number;
}

export type IRatingsSummary = Record<string, IRatingBlock>;
