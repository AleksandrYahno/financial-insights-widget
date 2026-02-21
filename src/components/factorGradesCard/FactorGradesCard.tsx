import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { IFactorGradesCardProps } from '@components/factorGradesCard/factorGradesCard.interface';

const FactorGradesCard: FC<IFactorGradesCardProps> = (props): ReactElement => {
  const { t } = useTranslation();
  const { rows } = props;

  return (
    <div data-testid="factor-grades-card">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">
        {t('factorGrades.title')}
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-600">
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
                  <span className="text-blue-600 underline">
                    {t(`factorGrades.factors.${row.factorKey}`)}
                  </span>
                </td>
                <td className="px-2 py-1 text-center text-gray-800">
                  {row.now}
                </td>
                <td className="px-2 py-1 text-center text-gray-800">
                  {row.threeM}
                </td>
                <td className="px-2 py-1 text-center text-gray-800">
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
