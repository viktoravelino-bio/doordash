import { classNames } from '../../../lib/classNames';
import { Button } from '../button/Button';
import './TabPill.scss';

function TabPillItem({
  className,
  selectedTab,
  setSelectedTab,
  value,
  active,
  ...props
}) {
  return (
    <Button
      {...props}
      className={classNames(
        'tab-pill__item ',
        { muted: !(value === selectedTab) },
        className
      )}
      onClick={() => setSelectedTab(value)}
    />
  );
}

function TabPillRoot({ className, ...props }) {
  return (
    <div {...props} className={classNames('tab-pill__container', className)} />
  );
}

export const TabPill = Object.assign(TabPillRoot, {
  Item: TabPillItem,
});
