import { useState } from 'react';
import { StarOutlinedIcon } from '../../../assets/icons';
import { Icon } from '../../atoms/icon/Icon';
import { NewReviewCard } from './NewReviewCard';
import './ReviewCard.scss';

export function ReviewCardRoot({ userName, rating = 0, date, review }) {
  return (
    <div className="review-card">
      <h5>{userName}</h5>

      <div className="review-card__header">
        <div className="review-card__rating">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon
              icon={StarOutlinedIcon}
              size={11}
              className={i + 1 == rating ? 'active' : ''}
            />
          ))}
        </div>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>DoorDash Order</span>
      </div>

      <p>{review}</p>
    </div>
  );
}

export const ReviewCard = Object.assign(ReviewCardRoot, {
  NewCard: NewReviewCard,
});
