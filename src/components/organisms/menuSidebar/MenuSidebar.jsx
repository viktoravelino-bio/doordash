import { Sidebar } from '../../molecules/sidebar/Sidebar';

export const MenuSidebar = ({ visible, onClose, children }) => {
  return (
    <Sidebar visible={visible} onClose={onClose}>
      {children}
    </Sidebar>
  );
};
