import { FC, ReactElement } from 'react';

import { useQuantRanking } from '@api';
import { CardSkeleton } from '@components/cardSkeleton/CardSkeleton';
import { QuantRankingCard } from '@components/quantRankingCard/QuantRankingCard';
import { mapRankings } from './helpers/quantRankingCardVM.helper';

const QuantRankingCardVM: FC = (): ReactElement => {
  const { data, isLoading } = useQuantRanking();

  if (isLoading || !data) {
    return <CardSkeleton />;
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
