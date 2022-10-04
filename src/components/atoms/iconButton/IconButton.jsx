import { Icon } from '../icon/Icon';
import './IconButton.scss';

export const IconButton = ({
  icon,
  width,
  height,
  size,
  className = '',
  ...rest
}) => {
  return (
    <button className={`icon-button ${className}`} {...rest}>
      <Icon icon={icon} width={width} height={height} size={size} />
    </button>
  );
};
