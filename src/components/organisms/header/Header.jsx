import { useState } from 'react';
import './Header.scss';
import { ShoppingCartButton } from '../../atoms/shoppingCartButton/ShoppingCartButton';
import { SearchInput } from '../../molecules/searchInput/SearchInput';
import { DoorDashLogo } from '../../../assets/logo';
import { IconButton } from '../../atoms/iconButton/IconButton';
import { AddressSelection } from '../../atoms/addressSelection/AddressSelection';

export const Header = ({ className, onOpenMenu, onShoppingCartOpen }) => {
  const [value, setValue] = useState('');

  return (
    <header className={`header__container ${className}`}>
      <IconButton icon="menu" className="menu-button" onClick={onOpenMenu} />
      <DoorDashLogo className="logo" />
      <AddressSelection className="address-selection" />
      <SearchInput value={value} onChange={setValue} searchValues={[{}]} />
      <ShoppingCartButton
        className="shopping-cart"
        onClick={onShoppingCartOpen}
      />
    </header>
  );
};
