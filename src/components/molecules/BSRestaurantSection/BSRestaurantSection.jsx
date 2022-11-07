import { PersonIcon, StarIcon } from '../../../assets/icons';
import { Button } from '../../atoms/button/Button';
import { Card } from '../../atoms/card/Card';
import { Icon } from '../../atoms/icon/Icon';
import './BSRestaurantSection.scss';

export function BSRestaurantSection({
  name,
  ratings,
  numberOfRating,
  distance,
  status,
  timeOfClosing,
}) {
  return (
    <div className="restaurant-section">
      <h3>{name}</h3>
      <div className="restaurant-section__info">
        <span>
          <Icon icon={StarIcon} size={18} style={{ marginBottom: '1px' }} />
          {ratings} ({numberOfRating} ratings)
        </span>
        <span>•</span>
        <span>$</span>
        <span>•</span>
        <span>
          <Icon icon={PersonIcon} size={20} />
          {distance}
        </span>
      </div>

      <div className="restaurant-section__working-hours">
        <span className={`${status === 'Open' ? 'open' : 'closed'}`}>
          {status}
        </span>
        <span>•</span>
        <span>Closes at 10:00 PM</span>
      </div>

      <div className="restaurant-section__products-list">
        <Card size="sm">
          <Card.Body>
            <Card.Image src="https://img.cdn4dd.com/p/fit=cover,width=1200,format=auto,quality=70/media/photosV2/c71d2151-d5e7-4497-ae48-b1d9c73217bf-retina-large.jpg " />
            <Card.Subtitle>Turkey Breast</Card.Subtitle>
            <Card.Text>CA$7.19</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="restaurant-section__action-buttons">
        <div>
          <Button className="muted">Delivery</Button>
          <span>CA$0 delivery fee</span>
        </div>
        <div>
          <Button className="muted">Pickup</Button>
          <span>CA$0 fees</span>
        </div>
      </div>
    </div>
  );
}
