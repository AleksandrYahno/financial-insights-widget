import { FC, ReactElement } from 'react';

import { useQuantRanking } from '@api';
import { CardSkeleton } from '@components/cardSkeleton/CardSkeleton';
import { CardSlotError } from '@components/cardSlotError/CardSlotError';
import { QuantRankingCard } from '@components/quantRankingCard/QuantRankingCard';
import { mapRankings } from './helpers/quantRankingCardVM.helper';

const QuantRankingCardVM: FC = (): ReactElement => {
  const { data, isLoading, isError, refetch } = useQuantRanking();

  if (isError) {
    return <CardSlotError onRetry={() => void refetch()} />;
  }

  if (isLoading || !data) {
    return <CardSkeleton variant="quant-ranking" />;
  }

  const { rankedOverall, rankedInSector, rankedInIndustry } = mapRankings(
    data.rankings,
  );

  return (
    <QuantRankingCard
      sector={data.sector}
      industry={data.industry}
      rankedOverall={rankedOverall}
      rankedInSector={rankedInSector}
      rankedInIndustry={rankedInIndustry}
    />
  );
};

export { QuantRankingCardVM };
