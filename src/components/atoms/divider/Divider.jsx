import { classNames } from '../../../lib/classNames';
import './Divider.scss';

export function Divider({ className, label, ...props }) {
  return (
    <div {...props} className={classNames('divider', className)}>
      {label && <span>{label}</span>}
    </div>
  );
}
