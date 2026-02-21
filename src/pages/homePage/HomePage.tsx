import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { FinancialInsightsRail } from '@features/financialInsightsRail/FinancialInsightsRail';

const HomePage: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen w-full flex-col gap-4 p-3 md:flex-row md:gap-4 md:p-4">
      <section
        aria-label={t('homePage.mainContent')}
        className="min-w-0 flex-1 bg-gray-50 p-6"
      >
        <p className="text-gray-600">
          {t('homePage.mainContent')}
        </p>
      </section>

      <aside className="flex shrink-0 md:w-[24rem]">
        <FinancialInsightsRail />
      </aside>
    </main>
  );
};

export default HomePage;
