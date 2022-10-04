import { Sidebar } from '../../molecules/sidebar/Sidebar';

export const MenuSidebar = ({ className, visible, onClose, children }) => {
  return (
    <Sidebar visible={visible} onClose={onClose}>
      {children}
    </Sidebar>
  );
};
