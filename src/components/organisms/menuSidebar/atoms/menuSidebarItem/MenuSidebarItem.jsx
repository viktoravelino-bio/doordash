import './MenuSidebarItem.scss';
import { Icon } from '../../../../atoms/icon/Icon';
import {  NavLink } from 'react-router-dom';

export const MenuSidebarItem = ({ icon, label, ...rest }) => {
  // const active = 'offers' === rest.href;

  return (
    <NavLink
      className={({ isActive }) =>
        `sidebar__menu-item ${isActive && !!rest.to ? 'active' : ''}`
      }
      {...rest}
      end
    >
      {icon && <Icon icon={icon} />}
      <span>{label}</span>
    </NavLink>
  );
};
