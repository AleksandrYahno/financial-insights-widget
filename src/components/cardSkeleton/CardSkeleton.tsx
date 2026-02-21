import { FC, ReactElement } from 'react';

import { ICardSkeletonProps } from '@components/cardSkeleton/cardSkeleton.interface';

const VARIANT_HEIGHT: Record<
  NonNullable<ICardSkeletonProps['variant']>,
  string
> = {
  'quant-ranking': 'h-[309px]',
  'ratings-summary': 'h-[150.5px]',
  'factor-grades': 'h-[238.5px]',
};

const VARIANT_BAR_COUNT: Record<
  NonNullable<ICardSkeletonProps['variant']>,
  number
> = {
  'quant-ranking': 5,
  'ratings-summary': 3,
  'factor-grades': 4,
};

const CardSkeleton: FC<ICardSkeletonProps> = (props): ReactElement => {
  const { variant } = props;
  const heightClass =
    (variant && VARIANT_HEIGHT[variant]) ?? 'min-h-[220px]';
  const barCount = (variant && VARIANT_BAR_COUNT[variant]) ?? 5;

  return (
    <div
      className={`flex flex-col ${heightClass} bg-white p-4 animate-pulse`}
      data-testid="card-skeleton"
    >
      <div className="mb-4 h-6 w-2/5 shrink-0 rounded bg-gray-300" />

      <div className="flex min-h-0 flex-1 flex-col gap-2">
        {Array.from({ length: barCount }, (_, i) => (
          <div
            key={i}
            className="min-h-[8px] flex-1 rounded bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
};

export { CardSkeleton };
