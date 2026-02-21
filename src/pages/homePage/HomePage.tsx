import { FC, ReactElement } from 'react';

import { FinancialInsightsRail } from '@features/financialInsightsRail/FinancialInsightsRail';

const HomePage: FC = (): ReactElement => {
  return (
    <main>
      <FinancialInsightsRail />
    </main>
  );
};

export default HomePage;
