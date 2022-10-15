import { forwardRef, memo } from 'react';
import { classNames } from '../../../lib/classNames';
import { Icon } from '../icon/Icon';
import './CuisineSelectionItem.scss';

function CuisineSelectionItemComponent(
  { isSelected, item, className, ...props },
  ref
) {
  if (!item) return null;

  const { label, icon } = item;

  return (
    <button
      {...props}
      className={classNames('cuisine-selection-item', className, {
        selected: isSelected,
      })}
      ref={ref}
    >
      <Icon icon={icon} size={60} />
      {label && <span className="cuisine-selection-item__label">{label}</span>}
    </button>
  );
}

export const CuisineSelectionItem = memo(
  forwardRef(CuisineSelectionItemComponent)
);
