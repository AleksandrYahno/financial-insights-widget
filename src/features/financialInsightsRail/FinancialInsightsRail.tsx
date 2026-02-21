import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { useUser } from '@api';
import {
  CARD_SLOT_IDS,
  CardSlotId,
  isSlotVisible,
} from '@features/financialInsightsRail/financialInsightsRail.config';
import { FactorGradesCardVM } from '@features/financialInsightsRail/vm/FactorGradesCardVM/FactorGradesCardVM';
import { QuantRankingCardVM } from '@features/financialInsightsRail/vm/QuantRankingCardVM/QuantRankingCardVM';
import { RatingsSummaryCardVM } from '@features/financialInsightsRail/vm/RatingsSummaryCardVM/RatingsSummaryCardVM';

const SLOT_VM_MAP: Record<CardSlotId, FC> = {
  'ratings-summary': RatingsSummaryCardVM,
  'factor-grades': FactorGradesCardVM,
  'quant-ranking': QuantRankingCardVM,
};

const FinancialInsightsRail: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { data: user } = useUser();
  const isPremium = user?.premium ?? false;

  return (
    <aside
      aria-label={t('rail.ariaLabel')}
      className="flex max-w-md flex-col gap-4 rounded-lg bg-gray-100 p-4 shadow-md"
      data-testid="financial-insights-rail"
    >
      {CARD_SLOT_IDS.map((slotId: CardSlotId) => {
        if (!isSlotVisible(slotId, isPremium)) {
          return null;
        }

        const SlotVM = SLOT_VM_MAP[slotId];

        return (
          <div
            key={slotId}
            className="border-t border-gray-200 pt-4 first:border-0 first:pt-0"
            data-testid={`slot-${slotId}`}
          >
            <SlotVM />
          </div>
        );
      })}
    </aside>
  );
};

export { FinancialInsightsRail };
