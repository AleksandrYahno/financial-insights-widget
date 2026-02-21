import { FC, ReactElement } from 'react';

import { useRatingsSummary } from '@api';
import { CardSkeleton } from '@components/cardSkeleton/CardSkeleton';
import { CardSlotError } from '@components/cardSlotError/CardSlotError';
import { RatingsSummaryCard } from '@components/ratingsSummaryCard/RatingsSummaryCard';
import { mapToRows } from './helpers/ratingsSummaryCardVM.helper';

const RatingsSummaryCardVM: FC = (): ReactElement => {
  const { data, isLoading, isError, refetch } = useRatingsSummary();

  if (isError) {
    return <CardSlotError onRetry={() => void refetch()} />;
  }

  if (isLoading || !data) {
    return <CardSkeleton />;
  }

  const rows = mapToRows(data);

  return <RatingsSummaryCard rows={rows} />;
};

export { RatingsSummaryCardVM };
