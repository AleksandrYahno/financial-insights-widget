import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { IRatingsSummaryCardProps } from '@components/ratingsSummaryCard/ratingsSummaryCard.interface';

const RatingsSummaryCard: FC<IRatingsSummaryCardProps> = (props): ReactElement => {
  const { t } = useTranslation();
  const { rows } = props;

  return (
    <div data-testid="ratings-summary-card">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">
        {t('ratingsSummary.title')}
      </h3>

      <div className="space-y-2">
        {rows.map((row) => (
          <div
            key={row.source}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-blue-600 underline">
              {row.source}
            </span>
            <span className="text-gray-800">
              {row.rating}
            </span>
            <span className="text-gray-800">
              {row.score.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { RatingsSummaryCard };
