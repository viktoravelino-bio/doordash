import { ReactComponent as EmptyCartImg } from '../../../../../assets/imgs/empty-cart.svg';
import './EmptyCartView.scss';

export const EmptyCartView = () => {
  return (
    <div className="shopping-cart__empty-view">
      <EmptyCartImg />
      <div>
        <span>Your cart is empty</span>
        <span>Add items to get started</span>
      </div>
    </div>
  );
};
