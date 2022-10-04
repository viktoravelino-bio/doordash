import { Sidebar } from '../../molecules/sidebar/Sidebar';
import { EmptyCartView } from './atoms/emptyCartView/EmptyCartView';
import './ShoppingCartSidebar.scss';

export const ShoppingCartSidebar = ({ visible, onClose }) => {
  return (
    <Sidebar visible={visible} onClose={onClose} fromRight>
      <EmptyCartView />
    </Sidebar>
  );
};
