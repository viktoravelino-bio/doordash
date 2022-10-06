import { forwardRef } from 'react';
import { Icon } from '../icon/Icon';
import './FilterItem.scss';

export const FilterItem = forwardRef(
  (
    {
      children,
      leftIcon,
      leftDivider,
      rightIcon,
      rightDivider,
      className = '',
    },
    ref
  ) => {
    return (
      <div className={`filter-item__container ${className}`} ref={ref}>
        {/* {leftIcon && <Icon icon={leftIcon} size={13} />} */}
        <span>{children}</span>
        {rightDivider && <div className="divider" />}
        {rightIcon && <Icon icon={rightIcon} size={13} />}
      </div>
    );
  }
);
