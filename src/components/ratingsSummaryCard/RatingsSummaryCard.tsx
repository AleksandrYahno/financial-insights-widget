import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { IRatingsSummaryCardProps } from '@components/ratingsSummaryCard/ratingsSummaryCard.interface';

const RatingsSummaryCard: FC<IRatingsSummaryCardProps> = (props): ReactElement => {
  const { t } = useTranslation();
  const { rows } = props;

  return (
    <div
      className="bg-white p-4"
      data-testid="ratings-summary-card"
    >
      <h3 className="mb-4 text-lg font-semibold text-[#717171]">
        {t('ratingsSummary.title')}
      </h3>

      <div className="space-y-2 text-[13px]">
        {rows.map((row) => (
          <div
            key={row.source}
            className="grid grid-cols-3 items-center gap-4"
          >
            <span className="text-[#44659f]">
              {row.source}
            </span>
            <span className="text-center text-black">
              {row.rating}
            </span>
            <span className="text-center text-black">
              {row.score.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { RatingsSummaryCard };
