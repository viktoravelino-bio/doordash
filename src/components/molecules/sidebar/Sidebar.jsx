import { useEffect, useRef } from 'react';
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
  onScroll = () => {},
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

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        window.addEventListener('click', onClose);
      }, 0);
    }

    if (!visible) {
      window.removeEventListener('click', onClose);
    }

    return () => {
      window.removeEventListener('click', onClose);
    };
  }, [visible]);

  return (
    <aside
      {...props}
      className={classNames('sidebar__container', className, {
        right: fromRight,
        show: visible,
      })}
      onScroll={(e) => {
        handleShowHeaderShadowOnScroll(e);
        onScroll(e);
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sidebar__header" ref={headerRef}>
        <IconButton icon={CloseOutlinedIcon} onClick={onClose} />
      </div>
      {children}
    </aside>
  );
}
