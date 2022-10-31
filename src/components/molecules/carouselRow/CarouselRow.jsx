import { ArrowRightIcon, DashPass } from '../../../assets/icons';
import { Card } from '../../atoms/card/Card';
import { Icon } from '../../atoms/icon/Icon';
import { IconButton } from '../../atoms/iconButton/IconButton';

import './CarouselRow.scss';

export function CarouselRow({ cardSize, title, data, showTopDivider }) {
  return (
    <div className="carousel-row__container">
      {showTopDivider && <div className="carouser__divider" />}
      <div className="carousel-row__header">
        <h2>{title}</h2>
        {/* <IconButton icon={ArrowRightIcon} size={20} /> */}
      </div>

      <div className="carousel-row__content">
        {data?.map(
          ({ image, isDashPass, restaurantName, subText, highlight, id }) => (
            <Card size={cardSize} key={restaurantName} href={`store/${id}`}>
              <Card.Image src={image} />
              <Card.Body>
                {highlight && (
                  <Card.HighlightText>$0 Delivery Fee</Card.HighlightText>
                )}

                {restaurantName && (
                  <Card.Title>
                    {restaurantName}
                    {isDashPass && <Icon icon={DashPass} />}
                  </Card.Title>
                )}

                {subText && <Card.Subtitle>{subText}</Card.Subtitle>}
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
