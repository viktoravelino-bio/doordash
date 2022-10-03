import './IconButton.scss';

export const IconButton = ({
  icon: Icon,
  size = 24,
  className = '',
  ...rest
}) => {
  return (
    <button className={`icon-button ${className}`} {...rest}>
      <Icon width={size} height={size} fill="currentColor" />
    </button>
  );
};
