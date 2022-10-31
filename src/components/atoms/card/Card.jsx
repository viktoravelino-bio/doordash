import { classNames } from '../../../lib/classNames';
import { Button } from '../button/Button';
import './Card.scss';

function CardImage(props) {
  return <img {...props} className="card__image" />;
}

function CardHighlightText(props) {
  return <span {...props} className="card__highlight-text" />;
}

function CardText(props) {
  return <p {...props} className="card__text" />;
}

function CardSubtitle(props) {
  return <h5 {...props} className="card__subtitle" />;
}

function CardTitle(props) {
  return <h2 {...props} className="card__title" />;
}

function CardBody(props) {
  return <div {...props} className="card__body"></div>;
}

function CardRoot({ className, size, as = 'a', ...props }) {
  const Component = 'a';

  return (
    <Component
      {...props}
      className={classNames('card__container', className, size)}
    />
  );
}

function CardActionButton({ children, className, ...props }) {
  return (
    <Button className="card__action-button muted" {...props}>
      {children}
    </Button>
  );
}

export const Card = Object.assign(CardRoot, {
  Image: CardImage,
  Body: CardBody,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Text: CardText,
  HighlightText: CardHighlightText,
  ActionButton: CardActionButton,
});
