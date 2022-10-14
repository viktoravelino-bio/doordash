import { useRef } from 'react';
import { classNames } from '../../../lib/classNames';
import { CloseOutlinedIcon } from '../../../assets/icons';
import { IconButton } from '../../atoms/iconButton/IconButton';
import './Sidebar.scss';

export function Sidebar({
  visible,
  onClose,
  children,
  fromRight,
  className,
  ...props
}) {
  const headerRef = useRef(null);

  const handleShowHeaderShadowOnScroll = (e) => {
    if (e.target.scrollTop > 0) {
      headerRef.current.classList.add('shadow');
    } else {
      headerRef.current.classList.remove('shadow');
    }
  };

  return (
    <aside
      {...props}
      className={classNames('sidebar__container', className, {
        right: fromRight,
        show: visible,
      })}
      onScroll={(e) => {
        handleShowHeaderShadowOnScroll(e);
        props.onScroll(e);
      }}
    >
      <div className="sidebar__header" ref={headerRef}>
        <IconButton icon={CloseOutlinedIcon} onClick={onClose} />
      </div>
      {children}
    </aside>
  );
}
