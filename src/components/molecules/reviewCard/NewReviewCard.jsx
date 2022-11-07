import { useState } from 'react';
import { StarOutlinedIcon } from '../../../assets/icons';
import { Icon } from '../../atoms/icon/Icon';
import './NewReviewCard.scss';

export function NewReviewCard({ userName, onChange, initialValue = 0 }) {
  const [rating, setRating] = useState(initialValue);
  function handleChange(value) {
    setRating(value);
    onChange(value);
    console.log('Open modal for writing review with rating: ', value);
  }
  return (
    <div className="new-review-card">
      <h5>{userName}</h5>

      <div className={`new-review-card__rating ${rating > 0 ? 'active' : ''}`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Icon
            className={`${rating === i + 1 ? 'active' : ''}`}
            icon={StarOutlinedIcon}
            size={30}
            onClick={() => handleChange(i + 1)}
          />
        ))}
      </div>

      <span onClick={() => console.log('Open modal for writing review')}>
        Start your review
      </span>
    </div>
  );
}
