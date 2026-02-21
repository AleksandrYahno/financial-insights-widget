import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { IFactorGradesCardProps } from '@components/factorGradesCard/factorGradesCard.interface';

const FactorGradesCard: FC<IFactorGradesCardProps> = (props): ReactElement => {
  const { t } = useTranslation();
  const { rows } = props;

  return (
    <div
      className="bg-white p-4"
      data-testid="factor-grades-card"
    >
      <h3 className="mb-4 text-lg font-semibold text-[#717171]">
        {t('factorGrades.title')}
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-xs text-[#717171]">
              <th className="pb-2 text-left font-medium" />
              <th className="px-2 pb-2 text-center font-medium">
                {t('factorGrades.now')}
              </th>
              <th className="px-2 pb-2 text-center font-medium">
                {t('factorGrades.threeM')}
              </th>
              <th className="px-2 pb-2 text-center font-medium">
                {t('factorGrades.sixM')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.factorKey}>
                <td className="py-1">
                  <span className="text-[#44659f]">
                    {t(`factorGrades.factors.${row.factorKey}`)}
                  </span>
                </td>
                <td className="px-2 py-1 text-center text-black">
                  {row.now}
                </td>
                <td className="px-2 py-1 text-center text-black">
                  {row.threeM}
                </td>
                <td className="px-2 py-1 text-center text-black">
                  {row.sixM}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { FactorGradesCard };
