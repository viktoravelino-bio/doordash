import { forwardRef, memo } from 'react';
import { classNames } from '../../../lib/classNames';

import './Button.scss';

function ButtonComponent(
  { children, className, icon: Icon = null, ...props },
  ref
) {
  return (
    <button {...props} className={classNames('btn', className)} ref={ref}>
      {Boolean(Icon) && <Icon icon={Icon} height="100%" />}
      {children}
    </button>
  );
}

export const Button = memo(forwardRef(ButtonComponent));
