import { useState } from 'react';
import { classNames } from '../../../lib/classNames';
import { Button } from '../../atoms/button/Button';
import { Modal } from '../../atoms/modal/Modal';
import './PriceModal.scss';

export function PriceModal({ onReset, onApply }) {
  const numberOfLevels = 4;
  const [priceLevel, setPriceLevel] = useState(2);

  return (
    <>
      <Modal.Header>
        <h2>Price</h2>
      </Modal.Header>

      <Modal.Body>
        <div className="price-modal__body">
          {Array.from({ length: numberOfLevels }, (_, i) => (
            <Button
              key={i}
              className={classNames({ muted: !(priceLevel >= i + 1) })}
              onClick={() => setPriceLevel(i + 1)}
            >
              {Array.from({ length: i + 1 }, () => '$').join('')}
            </Button>
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
