import { forwardRef, memo } from 'react';
import { classNames } from '../../../lib/classNames';
import { Avatar } from '../avatar/Avatar';
import './ProductSectionItem.scss';
import { Link } from 'react-router-dom';

function ProductSectionItemComponent({ item, className, ...props }, ref) {
  const { href, label, image } = item;

  return (
    <Link
      {...props}
      className={classNames('product-section-item', className)}
      href={href}
      ref={ref}
    >
      <Avatar src={image} size={60} />
      {label && <span className="product-section-item__label">{label}</span>}
    </Link>
  );
}

export const ProductSectionItem = memo(forwardRef(ProductSectionItemComponent));
