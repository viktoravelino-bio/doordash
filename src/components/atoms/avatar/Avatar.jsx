import { forwardRef, memo } from 'react';
import { classNames } from '../../../lib/classNames';
import { getComponentSize } from '../../../lib/getComponentSize';
import './Avatar.scss';

function AvatarComponent(
  { className, size = 40, height, width, ...props },
  ref
) {
  return (
    <img
      alt="avatar"
      {...props}
      className={classNames('avatar', className)}
      {...getComponentSize({ height, size, width })}
      ref={ref}
    />
  );
}

export const Avatar = memo(forwardRef(AvatarComponent));
