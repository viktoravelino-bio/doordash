import { lazy } from 'react';
import { ArrowLeftIcon, CloseIcon, SearchIcon } from '../../../assets/icons';

const map = {
  'arrow-left': ArrowLeftIcon,
  search: SearchIcon,
  close: CloseIcon,
};

export const Icon = ({
  icon = 'arrow-left',
  width,
  height,
  size = 24,
  ...rest
}) => {
  const Component = map[icon];

  function getSize() {
    if (width || height) {
      return { width, height };
    }

    return { width: size, height: size };
  }

  return <Component {...getSize()} fill="currentColor" {...rest} />;
};
