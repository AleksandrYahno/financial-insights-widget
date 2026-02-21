import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { IQuantRankingCardProps } from '@components/quantRankingCard/quantRankingCard.interface';

const QuantRankingCard: FC<IQuantRankingCardProps> = (props): ReactElement => {
  const { t } = useTranslation();
  const {
    sector,
    industry,
    rankedOverall,
    rankedInSector,
    rankedInIndustry,
  } = props;

  return (
    <div data-testid="quant-ranking-card">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">
        {t('quantRanking.title')}
      </h3>

      <dl className="space-y-2 text-sm">
        <div>
          <dt className="text-gray-600">
            {t('quantRanking.sector')}
          </dt>
          <dd>
            <span className="text-blue-600 underline">
              {sector}
            </span>
          </dd>
        </div>

        <div>
          <dt className="text-gray-600">
            {t('quantRanking.industry')}
          </dt>
          <dd>
            <span className="text-blue-600 underline">
              {industry}
            </span>
          </dd>
        </div>

        <div>
          <dt className="text-gray-600">
            {t('quantRanking.rankedOverall')}
          </dt>
          <dd>
            <span className="font-medium text-blue-600 underline">
              {rankedOverall.rank}
              {' '}
              {t('quantRanking.outOf')}
              {' '}
              {rankedOverall.total}
            </span>
          </dd>
        </div>

        <div>
          <dt className="text-gray-600">
            {t('quantRanking.rankedInSector')}
          </dt>
          <dd>
            <span className="font-medium text-blue-600 underline">
              {rankedInSector.rank}
              {' '}
              {t('quantRanking.outOf')}
              {' '}
              {rankedInSector.total}
            </span>
          </dd>
        </div>

        <div>
          <dt className="text-gray-600">
            {t('quantRanking.rankedInIndustry')}
          </dt>
          <dd>
            <span className="font-medium text-blue-600 underline">
              {rankedInIndustry.rank}
              {' '}
              {t('quantRanking.outOf')}
              {' '}
              {rankedInIndustry.total}
            </span>
          </dd>
        </div>
      </dl>

      <footer className="mt-4 border-t border-gray-200 pt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 underline"
        >
          {t('quantRanking.cta')}
        </a>
      </footer>
    </div>
  );
};

export { QuantRankingCard };
