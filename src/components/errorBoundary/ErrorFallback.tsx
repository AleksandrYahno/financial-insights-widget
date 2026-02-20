import { FC } from 'react';

import {
  errorFallbackButtonStyle,
  errorFallbackMessageStyle,
  errorFallbackRootStyle,
} from '@components/errorBoundary/errorBoundary.styles';

const ErrorFallback: FC = () => {
  const handleReload = (): void => {
    window.location.reload();
  };

  return (
    <div style={errorFallbackRootStyle}>
      <p style={errorFallbackMessageStyle}>
        Something went wrong.
      </p>

      <button
        type="button"
        onClick={handleReload}
        style={errorFallbackButtonStyle}
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorFallback;
