import './StoreHeader.scss';
import { DashPass, StarIcon, WarningIcon } from '../../../assets/icons';
import { Icon } from '../../atoms/icon/Icon';
import { IconButton } from '../../atoms/iconButton/IconButton';
import { Avatar } from '../../atoms/avatar/Avatar';

export function StoreHeader({
  rating,
  ratingCount,
  name: storeName,
  deliveryTime,
  deliveryFee,
  isDashPass,
  coverImg,
  logo,
  categories,
  priceLevel,
  distance,
}) {
  return (
    <div className="restaurant-header">
      <div
        className="restaurant-header__cover"
        style={{ position: 'relative' }}
      >
        <img className="restaurant-header__cover-img" src={coverImg} />
        <Avatar className="restaurant-header__logo" src={logo} size={75} />
      </div>

      <div className="restaurant-header__content__container">
        <h1>{storeName}</h1>
        <div className="restaurant-header__content">
          <div className="store-info">
            <div className="store-info__content">
              <div className="store-info__details">
                {isDashPass && (
                  <div className="dashpass">
                    <Icon icon={DashPass} />
                    DashPass
                    <span>•</span>
                  </div>
                )}
                <span>{categories.join(', ')}</span>
              </div>
              <div className="store-info__ratings">
                {rating} <Icon icon={StarIcon} size={14} /> {ratingCount}+
                ratings • {deliveryTime} min •{' '}
                {Array.from({ length: priceLevel }).fill('$').join('')}
              </div>
            </div>
            <div className="warning">
              <span>Service fee apply</span>
              <Icon icon={WarningIcon} size={10} />
            </div>
          </div>

          {/* action */}
          <div className="store-info__action">
            <IconButton icon={WarningIcon} size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
