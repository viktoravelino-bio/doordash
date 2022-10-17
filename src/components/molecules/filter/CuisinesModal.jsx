import { Button } from '../../atoms/button/Button';
import { Modal } from '../../atoms/modal/Modal';
import { Icon } from '../../atoms/icon/Icon';
import './CuisinesModal.scss';

import cuisinesOptions from '../../../data/cuisineFilterOptions';

export function CuisinesModal({ onReset, onApply }) {
  return (
    <>
      <Modal.Header>
        <h2>Cuisines</h2>
      </Modal.Header>

      <Modal.Body>
        <div className="cuisines-modal__body">
          {cuisinesOptions.map((cuisine) => (
            <div
              key={cuisine.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '0.875rem',
                fontWeight: 'bold',
              }}
            >
              <Icon icon={cuisine.icon} size={70} />
              {cuisine.label}
            </div>
          ))}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="ghost" onClick={onReset}>
          Reset
        </Button>
        <Button className="secondary" onClick={onApply}>
          View Results
        </Button>
      </Modal.Footer>
    </>
  );
}
