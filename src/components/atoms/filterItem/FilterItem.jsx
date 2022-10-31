import { classNames } from '../../../lib/classNames';
import { Button } from '../button/Button';
import './FilterItem.scss';

function FilterItemDivider() {
  return <div className="button-divider"></div>;
}

function FilterItemButton({ label, className, children, ...props }) {
  return (
    <Button
      {...props}
      className={classNames('muted filter-item-button', className)}
    >
      {/* {label} */}
      {children}
    </Button>
  );
}

export const FilterItem = {
  Button: FilterItemButton,
  Divider: FilterItemDivider,
};
