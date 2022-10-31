import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, DashPass, StarIcon } from '../../../assets/icons';
import { FilterItem } from '../../atoms/filterItem/FilterItem';
import { Icon } from '../../atoms/icon/Icon';
import { Modal } from '../../atoms/modal/Modal';
import { CuisinesModal } from './CuisinesModal';
import { Portal } from '../../atoms/portal/Portal';
import { RatingsModal } from './RatingsModal';
import './Filter.scss';
import { PriceModal } from './PriceModal';

function Filter() {
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(<CuisinesModal />);

  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;
    containerRef.current.style.top = headerHeight + 'px';

    window.onscroll = () => {
      if (
        containerRef.current.getBoundingClientRect().top <
        headerHeight + 10
      ) {
        containerRef.current.classList.add('sticky', 'show');
      } else if (
        containerRef.current.getBoundingClientRect().top > headerHeight
      ) {
        containerRef.current.classList.remove('sticky', 'show');
      }
    };
  }, []);

  return (
    <div className="filter-items-row__container" ref={containerRef}>
      <FilterItem.Button
        label="Cuisines"
        onClick={() => {
          setModalContent('cuisines');
          setShowModal(true);
        }}
      >
        Cuisines
        <Icon icon={ChevronDownIcon} size={12} />
      </FilterItem.Button>

      <FilterItem.Button label="Pickup">Pickup</FilterItem.Button>

      <FilterItem.Button
        label="Over 4.5"
        onClick={() => {
          setModalContent('ratings');
          setShowModal(true);
        }}
      >
        Over 4.5
        <Icon icon={StarIcon} size={16} style={{ marginLeft: '-0.5rem' }} />
        <FilterItem.Divider />
        <Icon icon={ChevronDownIcon} size={12} />
      </FilterItem.Button>

      <FilterItem.Button label="Under 30 min">Under 30 min</FilterItem.Button>

      <FilterItem.Button
        label="Price"
        onClick={() => {
          setModalContent('price');
          setShowModal(true);
        }}
      >
        Price
        <Icon icon={ChevronDownIcon} size={12} />
      </FilterItem.Button>

      <FilterItem.Button label="DashPass">
        <Icon icon={DashPass} size={24} style={{ marginRight: '-0.4rem' }} />
        DashPass
      </FilterItem.Button>

      <Portal>
        <Modal visible={showModal} onClose={() => setShowModal(false)}>
          {modalContent === 'cuisines' && (
            <CuisinesModal
              onReset={() => console.log('Reset cuisine filter')}
              onApply={() => console.log('Apply cuisine filter')}
            />
          )}

          {modalContent === 'ratings' && (
            <RatingsModal
              onReset={(value) => console.log('Reset ratings filter', value)}
              onApply={(value) => console.log('Apply ratings filter', value)}
            />
          )}

          {modalContent === 'price' && (
            <PriceModal
              onReset={() => console.log('Reset cuisine filter')}
              onApply={() => console.log('Apply cuisine filter')}
            />
          )}
        </Modal>
      </Portal>
    </div>
  );
}

export { Filter };
