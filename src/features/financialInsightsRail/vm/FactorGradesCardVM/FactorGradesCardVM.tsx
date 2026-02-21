import { FC, ReactElement } from 'react';

import {
  useFactorGrades3m,
  useFactorGrades6m,
  useFactorGradesNow,
} from '@api';
import { CardSkeleton } from '@components/cardSkeleton/CardSkeleton';
import { FactorGradesCard } from '@components/factorGradesCard/FactorGradesCard';
import {
  mergeFactorGrades,
  sixMToMap,
} from './helpers/factorGradesCardVM.helper';

const FactorGradesCardVM: FC = (): ReactElement => {
  const nowQuery = useFactorGradesNow();
  const threeMQuery = useFactorGrades3m();
  const sixMQuery = useFactorGrades6m();

  const isLoading =
    nowQuery.isLoading || threeMQuery.isLoading || sixMQuery.isLoading;
  const hasData =
    nowQuery.data && threeMQuery.data && sixMQuery.data;

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
