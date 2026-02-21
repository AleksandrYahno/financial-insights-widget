import { FC, ReactElement } from 'react';

import {
  useFactorGrades3m,
  useFactorGrades6m,
  useFactorGradesNow,
} from '@api';
import { CardSkeleton } from '@components/cardSkeleton/CardSkeleton';
import { CardSlotError } from '@components/cardSlotError/CardSlotError';
import { FactorGradesCard } from '@components/factorGradesCard/FactorGradesCard';
import {
  mergeFactorGrades,
  sixMToMap,
} from './helpers/factorGradesCardVM.helper';

const FactorGradesCardVM: FC = (): ReactElement => {
  const nowQuery = useFactorGradesNow();
  const threeMQuery = useFactorGrades3m();
  const sixMQuery = useFactorGrades6m();

  const isError =
    nowQuery.isError || threeMQuery.isError || sixMQuery.isError;
  const isLoading =
    nowQuery.isLoading || threeMQuery.isLoading || sixMQuery.isLoading;
  const hasData =
    nowQuery.data && threeMQuery.data && sixMQuery.data;

  const handleRetry = (): void => {
    void nowQuery.refetch();
    void threeMQuery.refetch();
    void sixMQuery.refetch();
  };

  if (isError) {
    return <CardSlotError onRetry={handleRetry} />;
  }

  if (isLoading || !hasData) {
    return <CardSkeleton />;
  }

  const sixMMap = sixMToMap(sixMQuery.data);
  const rows = mergeFactorGrades(
    nowQuery.data,
    threeMQuery.data,
    sixMMap,
  );

  return <FactorGradesCard rows={rows} />;
};

export { FactorGradesCardVM };
