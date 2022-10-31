import './MenuSidebarItem.scss';
import { Icon } from '../../../../atoms/icon/Icon';

export const MenuSidebarItem = ({ icon, label, ...rest }) => {
  const active = 'offers' === rest.href;

  return (
    <a className={`sidebar__menu-item ${active ? 'active' : ''}`} {...rest}>
      {icon && <Icon icon={icon} />}
      <span>{label}</span>
    </a>
  );
};
