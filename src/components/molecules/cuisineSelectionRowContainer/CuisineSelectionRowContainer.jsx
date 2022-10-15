import { classNames } from '../../../lib/classNames';
import './CuisineSelectionRowContainer.scss';
import cuisineOptions from '../../../data/cuisineFilterOptions';

import { CuisineSelectionItem } from '../../atoms/cuisineSelectionItem/CuisineSelectionItem';
export function CuisineSelectionRowContainer({ className, ...props }) {
  return (
    <div
      {...props}
      className={classNames('cuisines-selection-row__container', className)}
    >
      <div>
        {cuisineOptions.map((cuisine) => {
          {
            return (
              <CuisineSelectionItem
                key={cuisine.label}
                item={cuisine}
                isSelected={cuisine.label === 'Drinks'}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
