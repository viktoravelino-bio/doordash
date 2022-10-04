import { useEffect, useRef } from 'react';
import { Icon } from '../../atoms/icon/Icon';
import './Sidebar.scss';

export const Sidebar = ({ visible, onClose, children, fromRight }) => {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const inAnimation = fromRight
    ? 'animate__slideInRight'
    : 'animate__slideInLeft';
  const outAnimation = fromRight
    ? 'animate__slideOutRight'
    : 'animate__slideOutLeft';

  const handleShowHeaderShadowOnScroll = (e) => {
    if (e.target.scrollTop > 0) {
      headerRef.current.classList.add('shadow');
    } else {
      headerRef.current.classList.remove('shadow');
    }
  };

  const handleToggleShowSidebar = () => {
    if (visible) {
      containerRef.current.style.visibility = 'visible';
      containerRef.current.classList.remove(outAnimation);
      containerRef.current.classList.add(inAnimation);
    } else {
      containerRef.current.classList.remove(inAnimation);
      containerRef.current.classList.add(outAnimation);
    }
  };

  useEffect(() => {
    handleToggleShowSidebar();
  }, [visible]);

  return (
    <aside
      ref={containerRef}
      className={`sidebar__container animate__animated`}
      onScroll={handleShowHeaderShadowOnScroll}
    >
      <div className="sidebar__header" ref={headerRef}>
        <Icon
          icon="close-outlined"
          className="sidebar__close-button"
          onClick={onClose}
        />
      </div>
      {children}
    </aside>
  );
};
