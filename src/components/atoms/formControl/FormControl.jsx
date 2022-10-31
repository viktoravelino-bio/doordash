import { forwardRef, useRef, useState } from 'react';
import './FormControl.scss';

export const FormControl = forwardRef(
  (
    { type, value, onChange, label, error, auxText, className, ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(type !== 'password');

    const togglePassword = () => {
      setShowPassword((prevState) => !prevState);
    };

    return (
      <div className={`form-control__container ${className}`}>
        <div className="form-control__label__container">
          {label && <label className="form-control__label">{label}</label>}
          {auxText && <span className="form-control__aux-text">{auxText}</span>}
        </div>

        <div
          className={`form-control__input__container ${
            Boolean(error) ? 'error' : ''
          }`}
        >
          <input
            className="form-control__input"
            type={
              !showPassword ? 'password' : type === 'password' ? 'text' : type
            }
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            ref={ref}
            {...rest}
          />
          {type === 'password' && (
            <button type="button" onClick={togglePassword}>
              {!showPassword ? 'Show' : 'Hide'}
            </button>
          )}
        </div>
        {Boolean(error) && (
          <span className="form-control__error-text">{error}</span>
        )}
      </div>
    );
  }
);
