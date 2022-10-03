import './Button.scss';

export const Button = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};
