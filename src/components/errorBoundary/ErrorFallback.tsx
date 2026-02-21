import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  errorFallbackButtonStyle,
  errorFallbackMessageStyle,
  errorFallbackRootStyle,
} from '@components/errorBoundary/errorBoundary.styles';

const ErrorFallback: FC = () => {
  const { t } = useTranslation();

  const handleReload = (): void => {
    window.location.reload();
  };

  return (
    <div style={errorFallbackRootStyle}>
      <p style={errorFallbackMessageStyle}>
        {t('error.somethingWentWrong')}
      </p>

      <button
        type="button"
        onClick={handleReload}
        style={errorFallbackButtonStyle}
      >
        {t('error.reload')}
      </button>
    </div>
  );
};

export default ErrorFallback;
