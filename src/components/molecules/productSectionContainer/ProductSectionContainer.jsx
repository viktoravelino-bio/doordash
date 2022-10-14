import { classNames } from '../../../lib/classNames';
import { ProductSectionItem } from '../../atoms/productSectionItem/ProductSectionItem';
import productSectionData from '../../../data/productSections.json';
import './ProductSectionContainer.scss';

export function ProductSectionContainer({ className, ...props }) {
  return (
    <div
      {...props}
      className={classNames('product-section__container', className)}
    >
      <div>
        {productSectionData.productSection.map((section) => (
          <ProductSectionItem item={section} />
        ))}
      </div>
    </div>
  );
}
