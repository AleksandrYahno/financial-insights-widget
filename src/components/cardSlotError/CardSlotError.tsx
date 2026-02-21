import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { ICardSlotErrorProps } from '@components/cardSlotError/cardSlotError.interface';

const CardSlotError: FC<ICardSlotErrorProps> = (props): ReactElement => {
  const { t } = useTranslation();
  const { onRetry } = props;

  return (
    <div
      className="bg-white p-4 text-center"
      data-testid="card-slot-error"
    >
      <p className="mb-3 text-[13px] text-gray-600">
        {t('cardSlot.loadFailed')}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded border border-gray-300 bg-white px-3 py-1.5 text-[13px] font-medium text-gray-800 hover:bg-gray-50"
      >
        {t('cardSlot.retry')}
      </button>
    </div>
  );
};

export { CardSlotError };
