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
      className="flex min-h-full max-w-sm flex-1 flex-col gap-4 bg-[#f5f0f0] p-4"
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
