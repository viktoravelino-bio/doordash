import { useEffect, useRef, useState } from 'react';
import { products } from '../../../assets/data/products';
import { MinusIcon, PlusIcon, TrashCanIcon } from '../../../assets/icons';
import { useShoppingCart } from '../../../context/ShoppingCartContext';
import { classNames } from '../../../lib/classNames';
import { Icon } from '../../atoms/icon/Icon';
import { IconButton } from '../../atoms/iconButton/IconButton';

import './CartItem.scss';

export function CartItem({ id, quantity }) {
  const [isQtyButtonOpen, setIsQtyButtonOpen] = useState(false);
  const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const ref = useRef(null);
  const [callback, setCallback] = useState(null);

  const item = products.find((item) => item.id === id);

  useEffect(() => {
    // prevent loop when clearing the callback
    if (!callback) return;

    if (ref.current) {
      clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      if (callback) {
        callback();
        setCallback(null);
      }
    }, 3000);

    return () => clearInterval(ref.current);
  }, [callback]);

  return (
    <div className="cart-item__container">
      <button
        className={classNames('cart-item__qty-action', {
          open: isQtyButtonOpen,
        })}
        onClick={() => {
          if (!isQtyButtonOpen) {
            setIsQtyButtonOpen(true);
          }
          setCallback(() => () => {
            setIsQtyButtonOpen(false);
          });
        }}
      >
        <Icon
          className={'icon'}
          icon={quantity === 1 ? TrashCanIcon : MinusIcon}
          onClick={() => {
            decreaseCartQuantity(id);
            setCallback(() => () => {
              setIsQtyButtonOpen(false);
            });
          }}
          size={14}
        />
        <span>{quantity}x</span>
        <Icon
          className={'icon'}
          icon={PlusIcon}
          onClick={() => {
            increaseCartQuantity(id);
          }}
        />
      </button>
      <img
        src="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=50/media/photosV2/e613077c-8089-4c9d-af11-2a7b1be98596-retina-large.jpg"
        alt=""
        height={60}
        width={60}
      />

      <div className="cart-item__body">
        <h4>{item.name}</h4>
        <span>CA$ {item.price.toFixed(2)}</span>
      </div>
      <IconButton
        icon={TrashCanIcon}
        size={18}
        onClick={() => removeFromCart(id)}
      />
    </div>
  );
}
