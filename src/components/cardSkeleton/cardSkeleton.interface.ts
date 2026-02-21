export type CardSkeletonVariant =
  | 'quant-ranking'
  | 'ratings-summary'
  | 'factor-grades';

export interface ICardSkeletonProps {
  variant?: CardSkeletonVariant;
}
