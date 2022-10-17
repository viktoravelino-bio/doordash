import { Button } from '../../atoms/button/Button';
import { Modal } from '../../atoms/modal/Modal';

import './RatingsModal.scss';
import { useEffect, useRef, useState } from 'react';
import { classNames } from '../../../lib/classNames';

function Slider({ value, onChange }) {
  const rangeRef = useRef(null);
  const range = [3, 3.5, 4, 4.5, 5];

  const getPercent = (value) => 100 - Math.round(((value - 3) / (5 - 3)) * 100);

  useEffect(() => {
    const percent = getPercent(value);
    rangeRef.current.style.width = percent + '%';
  }, [value]);

  return (
    <div className="slider__container">
      <div className="slider">
        <div className="slider__track"></div>
        <div className="slider__range" ref={rangeRef}></div>
        <div className="slider__buttons">
          {range.map((rangeValue) => (
            <button
              key={rangeValue}
              onClick={() => onChange(rangeValue)}
              className={classNames({
                fill: value <= rangeValue,
              })}
            />
          ))}
        </div>
      </div>

      <div className="slider__labels">
        {range.map((rangeValue) => (
          <span
            key={rangeValue}
            className={classNames({
              fill: value <= rangeValue,
            })}
            children={rangeValue}
          />
        ))}
      </div>
    </div>
  );
}

export function RatingsModal({ onApply, onReset }) {
  const [sliderValue, setSliderValue] = useState(4.5);

  return (
    <>
      <Modal.Header>
        <h2>Ratings</h2>
      </Modal.Header>

      <Modal.Body>
        <div className="ratings-modal__body">
          <span>Over {sliderValue}</span>
          <Slider value={sliderValue} onChange={setSliderValue} />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          className="ghost"
          onClick={() => {
            setSliderValue(4.5);
            onReset(4.5);
          }}
        >
          Reset
        </Button>
        <Button className="secondary" onClick={() => onApply(sliderValue)}>
          View Results
        </Button>
      </Modal.Footer>
    </>
  );
}
