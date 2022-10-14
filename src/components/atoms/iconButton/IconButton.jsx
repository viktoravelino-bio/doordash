import { forwardRef, memo } from 'react';
import { classNames } from '../../../lib/classNames';
import { getComponentSize } from '../../../lib/getComponentSize';
import { Icon } from '../icon/Icon';
import './IconButton.scss';

function IconButtonComponent(
  { icon, width, height, size = 24, className, ...props },
  ref
) {
  return (
    <button
      {...props}
      className={classNames('icon-button', className)}
      ref={ref}
    >
      <Icon icon={icon} {...getComponentSize({ height, size, width })} />
    </button>
  );
}

export const IconButton = memo(forwardRef(IconButtonComponent));
