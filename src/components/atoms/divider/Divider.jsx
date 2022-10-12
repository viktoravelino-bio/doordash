import './Divider.scss';

/**
 * @typedef {Object} DividerProps
 * @property {string} [label]
 * @property {string} [className]
 * @property {string} [labelClassName]
 *
 */

/**
 *
 * @param {DividerProps} {@link DividerProps}
 * @returns {JSX.Element}
 */
export function Divider({ className = '', label, labelClassName }) {
  // return <hr className={`divider ${className}`} {...rest} />;
  return (
    <div className={`divider ${className}`}>
      {label && <span className={`${labelClassName}`}>{label}</span>}
    </div>
  );
}
