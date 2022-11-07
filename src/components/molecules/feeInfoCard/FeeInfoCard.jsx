import './FeeInfoCard.scss';

export function FeeInfoCard({ type, fee, time }) {
  const isDelivery = type === 'delivery';

  return (
    <div className={`fees-info-card ${isDelivery ? 'delivery' : ''}`}>
      <div>
        <h3>CA${Number(fee).toFixed(2)}</h3>
        <span>{isDelivery ? 'delivery fee' : 'in fees'}</span>
      </div>

      <div className="divider"></div>

      <div>
        <h3>{time} min</h3>
        <span>{isDelivery ? 'delivery time' : 'ready for pickup'}</span>
      </div>
    </div>
  );
}
