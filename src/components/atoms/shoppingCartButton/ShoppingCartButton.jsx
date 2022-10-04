import './ShoppingCartButton.scss';
import { forwardRef } from 'react';
import { ShoppingCartIcon } from '../../../assets/icons';

export const ShoppingCartButton = forwardRef(
  ({ className, totalQtyOfProducts = 0, ...rest }, ref) => {
    return (
      <button
        className={`shopping-cart-button ${className}`}
        {...rest}
        ref={ref}
      >
        <ShoppingCartIcon width={21} height={21} fill="currentColor" />
        <span className="shopping-cart-button__text">{totalQtyOfProducts}</span>
      </button>
    );
  }
);
