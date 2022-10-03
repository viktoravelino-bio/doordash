import './Divider.scss';

export const Divider = ({ className = '', label, labelClassName, ...rest }) => {
  // return <hr className={`divider ${className}`} {...rest} />;
  return (
    <div className={`divider ${className}`}>
      {label && <span className={`${labelClassName}`}>{label}</span>}
    </div>
  );
};
