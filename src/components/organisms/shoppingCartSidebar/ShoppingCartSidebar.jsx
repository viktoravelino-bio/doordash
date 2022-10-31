import { products } from '../../../assets/data/products';
import { useShoppingCart } from '../../../context/ShoppingCartContext';
import { Button } from '../../atoms/button/Button';

import { Sidebar } from '../../molecules/sidebar/Sidebar';
import { EmptyCartView } from './atoms/emptyCartView/EmptyCartView';
import { CartItem } from './CartItem';
import './ShoppingCartSidebar.scss';

export const ShoppingCartSidebar = ({ visible, onClose }) => {
  const { cartItems } = useShoppingCart();

  return (
    <Sidebar visible={visible} onClose={onClose} fromRight>
      {cartItems.length === 0 ? (
        <EmptyCartView />
      ) : (
        <div
          className="shopping-cart__body"
          style={{ paddingInline: '1rem', paddingTop: '1rem' }}
        >
          <div className="shopping-cart__summary">
            <Button
              className="secondary"
              style={{
                width: '100%',
                justifyContent: 'space-between',
                paddingBlock: '1.2rem',
              }}
            >
              <span>Checkout</span>
              <span>
                CA${' '}
                {cartItems
                  .reduce((total, cartItem) => {
                    const item = products.find(
                      (item) => item.id === cartItem.id
                    );
                    return total + item.price * cartItem.quantity;
                  }, 0)
                  .toFixed(2)}
              </span>
            </Button>
          </div>
          <div
            className="shopping-cart__items-container"
            style={{ marginTop: '1rem' }}
          >
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </Sidebar>
  );
};
