import { forwardRef, memo } from 'react';
import { getComponentSize } from '../../../lib/getComponentSize';

function IconComponent(
  {
    icon: Component,
    width,
    height,
    size = 24,
    fill = 'currentColor',
    ...props
  },
  ref
) {
  if (!Boolean(Component) || typeof Component !== 'object') return null;

  return (
    <Component
      {...props}
      {...getComponentSize({ height, size, width })}
      fill={fill}
      ref={ref}
    />
  );
}

export const Icon = memo(forwardRef(IconComponent));
