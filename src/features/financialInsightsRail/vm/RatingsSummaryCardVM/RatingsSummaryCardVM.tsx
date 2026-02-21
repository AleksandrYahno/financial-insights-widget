import { FC, ReactElement } from 'react';

import { useRatingsSummary } from '@api';
import { CardSkeleton } from '@components/cardSkeleton/CardSkeleton';
import { RatingsSummaryCard } from '@components/ratingsSummaryCard/RatingsSummaryCard';
import { mapToRows } from './helpers/ratingsSummaryCardVM.helper';

const RatingsSummaryCardVM: FC = (): ReactElement => {
  const { data, isLoading } = useRatingsSummary();

  if (isLoading || !data) {
    return <CardSkeleton />;
  }

  const rows = mapToRows(data);

  return <RatingsSummaryCard rows={rows} />;
};

export { RatingsSummaryCardVM };
