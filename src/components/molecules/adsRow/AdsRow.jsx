import { Button } from '../../atoms/button/Button';
import { Card } from '../../atoms/card/Card';
import './AdsRow.scss';

const ads = [
  {
    title: '$0 delivery fees, reduced service fees with DashPass',
    subtitle: '',
    image:
      'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7b23faa7-95cc-4854-816b-800db3af7efd-retina-large.PNG',
    buttonLabel: 'Get DashPass',
    buttonColor: 'muted',
    href: '#',
    color: '#eee7de',
  },
  {
    title: 'Get 50% off your first DashMart order of $20+',
    subtitle: 'Groceries delivered to perfection. Now - 10/23.',
    image:
      'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2bc21a4b-99a2-42d6-b560-4e8997cfff06-retina-large.PNG',
    buttonLabel: 'Shop now',
    buttonColor: 'secondary',
    href: '#',
    color: 'rgb(249, 190, 170)',
  },
];

export function AdsRow() {
  return (
    <div className="ads-row__container">
      {ads.map(
        ({ buttonColor, buttonLabel, color, href, image, subtitle, title }) => (
          <Card
            key={title}
            className="ads__card"
            style={{ backgroundColor: color }}
            href={href}
          >
            <Card.Body>
              <h4>{title}</h4>
              {Boolean(subtitle) && <span>{subtitle}</span>}
              <Button className={buttonColor}>{buttonLabel}</Button>
            </Card.Body>
            <div
              className="image"
              style={{ backgroundImage: `url(${image})` }}
            />
          </Card>
        )
      )}
    </div>
  );
}
