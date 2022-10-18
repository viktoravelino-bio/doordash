import { ArrowRightIcon, DashPass } from '../../../assets/icons';
import { Card } from '../card/Card';
import { Icon } from '../icon/Icon';
import { IconButton } from '../iconButton/IconButton';
import './CarouselRow.scss';

export function CarouselRow({}) {
  return (
    <div className="carousel-row__container">
      <div className="carousel-row__header">
        <h2>Wallet Friendly</h2>
        <IconButton icon={ArrowRightIcon} size={20} />
      </div>

      <div className="carousel-row__content">
        <Card>
          <Card.Image src="https://img.cdn4dd.com/p/fit=cover,width=1200,format=jpeg,quality=50/media/store/header/37778b4f-5783-4aa4-8ae1-88962414966a.jpg " />
          <Card.Body>
            <Card.Title>
              Flaming Stove
              <Icon icon={DashPass} />
            </Card.Title>
            <Card.Text>
              0.7 mi • 20 min • $0 delivery fee, first order
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Image src="https://img.cdn4dd.com/p/fit=cover,width=1200,format=jpeg,quality=50/media/store/header/37778b4f-5783-4aa4-8ae1-88962414966a.jpg " />
          <Card.Body>
            <Card.Title>
              Flaming Stove
              <Icon icon={DashPass} />
            </Card.Title>
            <Card.Text>
              0.7 mi • 20 min • $0 delivery fee, first order
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
