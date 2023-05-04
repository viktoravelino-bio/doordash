import { useState } from 'react';
import './Header.scss';

import { SearchInput } from '../../molecules/searchInput/SearchInput';
import { DoorDashLogo, DoorDashLogoFull } from '../../../assets/logo';
import { IconButton } from '../../atoms/iconButton/IconButton';
import { AddressSelection } from '../addressSelection/AddressSelection';
import { SearchResultItem } from './searchResultItem/SearchResultItem';
import { Button } from '../../atoms/button/Button';
import {
  BagIcon,
  CartIcon,
  HelpIcon,
  HomeIcon,
  MenuIcon,
  TagIcon,
  UserIcon,
} from '../../../assets/icons';
import { classNames } from '../../../lib/classNames';

import restaurantsData from '../../../data/restaurants.json';
import { ShoppingCartSidebar } from '../shoppingCartSidebar/ShoppingCartSidebar';
import { MenuSidebar } from '../menuSidebar/MenuSidebar';
import { MenuSidebarItem } from '../menuSidebar/atoms/menuSidebarItem/MenuSidebarItem';
import { AuthModal } from '../authModal/AuthModal';
import { Link, useNavigate } from 'react-router-dom';

export const Header = ({ className }) => {
  const [value, setValue] = useState('');
  const [showShoppingCartSidebar, setShowShoppingCartSidebar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  function toggleShoppingCartSidebar() {
    setShowShoppingCartSidebar((prev) => !prev);
  }
  function toggleSideMenu() {
    setShowSideMenu((prev) => !prev);
  }
  function toggleAuthModal() {
    setShowAuthModal((prev) => !prev);
  }

  return (
    <>
      <header className={classNames('header__container', className)}>
        <IconButton icon={MenuIcon} onClick={toggleSideMenu} />
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <DoorDashLogo className="logo" />
          <DoorDashLogoFull className="logo-full" />
        </Link>

        <div className="order-type__container">
          <Button className="primary">Delivery</Button>
          <Button className="ghost" onClick={() => navigate('/pickup')}>
            Pickup
          </Button>
        </div>

        <AddressSelection className="address-selection" />

        <SearchInput
          value={value}
          onChange={setValue}
          renderItem={(item) => <SearchResultItem item={item} />}
          keyExtractor={(item) => item.id}
          searchResultValues={restaurantsData.restaurants}
        />

        <Button
          className="secondary shopping-cart"
          icon={CartIcon}
          onClick={toggleShoppingCartSidebar}
        >
          0
        </Button>

        <div className="auth-buttons__container">
          <Button className="ghost" onClick={toggleAuthModal}>
            Sign In
          </Button>
          <Button className="muted" onClick={toggleAuthModal}>
            Sign Up
          </Button>
        </div>
      </header>

      <AddressSelection className="main-page" />

      <ShoppingCartSidebar
        visible={showShoppingCartSidebar}
        onClose={toggleShoppingCartSidebar}
      />

      <MenuSidebar visible={showSideMenu} onClose={toggleSideMenu}>
        <MenuSidebarItem to="/" label="Home" icon={HomeIcon} />
        <MenuSidebarItem to="/pickup" label="Pickup" icon={BagIcon} />
        <MenuSidebarItem  label="Offers" icon={TagIcon} />
        <MenuSidebarItem  label="Home" icon={HelpIcon} />
        <MenuSidebarItem
          onClick={toggleAuthModal}
          label="Sign Up or Sign In"
          icon={UserIcon}
        />
      </MenuSidebar>

      <AuthModal
        isOpen={showAuthModal}
        onClose={toggleAuthModal}
        providers={{
          google: { label: 'Continue with Google' },
          twitter: { label: 'Continue with Twitter' },
          facebook: { label: 'Continue with Facebook' },
        }}
      />
    </>
  );
};
