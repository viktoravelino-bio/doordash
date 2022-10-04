import './MenuSidebarItem.scss';
import { Icon } from '../../../../atoms/icon/Icon';

export const MenuSidebarItem = ({ icon, label, href, ...rest }) => {
  const active = 'offers' === href;

  return (
    <a
      href={href}
      className={`sidebar__menu-item ${active ? 'active' : ''}`}
      {...rest}
    >
      {icon && <Icon icon={icon} />}
      <span>{label}</span>
    </a>
  );
};
