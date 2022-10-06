import './Filter.scss';
import { FilterItem } from '../../atoms/filterItem/FilterItem';
import { useRef } from 'react';

export const Filter = ({ className = '' }) => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);

  window.onscroll = () => {
    if (
      containerRef.current.getBoundingClientRect().top < 65 &&
      !itemRef.current.classList.contains('show')
    ) {
      itemRef.current.classList.add('show');
    }

    if (
      containerRef.current.getBoundingClientRect().top > 65 &&
      itemRef.current.classList.contains('show')
    ) {
      itemRef.current.classList.remove('show');
    }
  };

  return (
    <div className={`filter__container ${className}`} ref={containerRef}>
      <FilterItem className="cuisines" rightIcon="chevron-down" ref={itemRef}>
        Cuisines
      </FilterItem>

      <FilterItem>Pickup</FilterItem>

      <FilterItem rightDivider rightIcon="chevron-down">
        Over 4.5
      </FilterItem>

      <FilterItem>Under 30 min</FilterItem>

      <FilterItem rightIcon="chevron-down">Price</FilterItem>
    </div>
  );
};
