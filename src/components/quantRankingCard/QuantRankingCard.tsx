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
    <div
      className="bg-white p-4"
      data-testid="quant-ranking-card"
    >
      <h3 className="mb-4 text-lg font-semibold text-[#717171]">
        {t('quantRanking.title')}
      </h3>

      <dl className="text-[13px]">
        <div className="grid grid-cols-2 gap-x-4 border-b border-[#e0e0e0] pb-2 pt-0 first:pt-0">
          <dt className="text-black">
            {t('quantRanking.sector')}
          </dt>
          <dd className="text-right">
            <span className="text-[#44659f]">
              {sector}
            </span>
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-x-4 border-b border-[#e0e0e0] pb-2 pt-2">
          <dt className="text-black">
            {t('quantRanking.industry')}
          </dt>
          <dd className="text-right">
            <span className="text-[#44659f]">
              {industry}
            </span>
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-x-4 border-b border-[#e0e0e0] pb-2 pt-2">
          <dt className="text-black">
            {t('quantRanking.rankedOverall')}
          </dt>
          <dd className="text-right">
            <span className="text-[#44659f]">
              <span className="font-semibold">
                {rankedOverall.rank}
              </span>
              {' '}
              {t('quantRanking.outOf')}
              {' '}
              <span className="font-semibold">
                {rankedOverall.total}
              </span>
            </span>
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-x-4 border-b border-[#e0e0e0] pb-2 pt-2">
          <dt className="text-black">
            {t('quantRanking.rankedInSector')}
          </dt>
          <dd className="text-right">
            <span className="text-[#44659f]">
              <span className="font-semibold">
                {rankedInSector.rank}
              </span>
              {' '}
              {t('quantRanking.outOf')}
              {' '}
              <span className="font-semibold">
                {rankedInSector.total}
              </span>
            </span>
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-x-4 pt-2">
          <dt className="text-black">
            {t('quantRanking.rankedInIndustry')}
          </dt>
          <dd className="text-right">
            <span className="text-[#44659f]">
              <span className="font-semibold">
                {rankedInIndustry.rank}
              </span>
              {' '}
              {t('quantRanking.outOf')}
              {' '}
              <span className="font-semibold">
                {rankedInIndustry.total}
              </span>
            </span>
          </dd>
        </div>
      </dl>

      <footer className="mt-2 pt-2 pb-2">
        <a
          href="#"
          className="text-[13px] font-semibold text-[#44659f]"
        >
          {t('quantRanking.cta')}
        </a>
      </footer>
    </div>
  );
};

export { QuantRankingCard };
