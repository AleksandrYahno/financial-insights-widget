import { FC } from 'react';

import { IBackdropLoadingProps } from '@components/backdropLoading/backdropLoading.interface';

import './BackdropLoading.css';

const BackdropLoading: FC<IBackdropLoadingProps> = (props) => {
  const {
    isAbsolute = false,
    zIndex,
  } = props;

  const style = zIndex !== undefined ? { zIndex } : undefined;
  const className = isAbsolute ? 'backdrop backdrop_isAbsolute' : 'backdrop';

  return (
    <div
      className={className}
      style={style}
    >
      <div className="spinner" />
    </div>
  );
};

export default BackdropLoading;
