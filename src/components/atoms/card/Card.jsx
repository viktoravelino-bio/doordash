import { classNames } from '../../../lib/classNames';
import './Card.scss';

function CardText(props) {
  return <p {...props} className="card__text"></p>;
}

function CardTitle(props) {
  return <h3 {...props} className="card__title"></h3>;
}

function CardBody(props) {
  return <div {...props} className="card__body"></div>;
}

function CardImage(props) {
  return <img {...props} className="card__image" />;
}

function CardComponent({ className, as = 'a', ...props }) {
  const Component = 'a';
  return (
    <Component
      {...props}
      className={classNames('card__container', className)}
    />
  );
}

export const Card = Object.assign(CardComponent, {
  Image: CardImage,
  Body: CardBody,
  Title: CardTitle,
  Text: CardText,
});
