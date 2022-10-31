import { Card } from '../../atoms/card/Card';

export function MenuCardItem({ name, price, img }) {
  return (
    <Card style={{ border: '1px solid lightgray', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Card.Body style={{ flex: '1 0 auto' }}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>CA${price}</Card.Subtitle>
          <Card.HighlightText>#1 Most Liked</Card.HighlightText>
          <Card.ActionButton style={{ top: '70%', right: '5%' }}>
            Add
          </Card.ActionButton>
        </Card.Body>
        <div>
          <Card.Image src={img} />
        </div>
      </div>
    </Card>
  );
}
