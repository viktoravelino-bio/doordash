import { useState } from 'react';
import './Header.scss';
import { ShoppingCartButton } from '../../atoms/shoppingCartButton/ShoppingCartButton';
import { SearchInput } from '../../molecules/searchInput/SearchInput';
import { DoorDashLogo } from '../../../assets/logo';
import { IconButton } from '../../atoms/iconButton/IconButton';
import { AddressSelection } from '../../atoms/addressSelection/AddressSelection';
import { SearchResultItem } from './searchResultItem/SearchResultItem';

export const Header = ({ className, onOpenMenu, onShoppingCartOpen }) => {
  const [value, setValue] = useState('');

  return (
    <header className={`header__container ${className}`}>
      <IconButton icon="menu" className="menu-button" onClick={onOpenMenu} />
      <DoorDashLogo className="logo" />
      <AddressSelection className="address-selection" />

      <SearchInput
        value={value}
        onChange={setValue}
        renderItem={(item) => <SearchResultItem item={item} />}
        keyExtractor={(item) => item.id}
        // searchResultValues: results from the search handler
        searchResultValues={[
          {
            name: "McDonald's",
            tags: ['Burgers', 'Chicken', 'Wrap', 'Fish', 'Bakery'],
            id: 1,
            todayWorkHours: '11:00 - 23:00',
            logoUrl:
              'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/Screen_Shot_2020-06-25_at_3.11.26_PM.png',
          },
          {
            name: 'Burger King',
            tags: ['Fries', 'Burger', 'Milkshake'],
            id: 2,
            todayWorkHours: '17:00 - 23:00',
            logoUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png',
          },
          {
            name: 'Five Guys',
            tags: ['Hotdogs', 'Burger', 'Milkshake', 'Fries'],
            id: 3,
            todayWorkHours: '13:00 - 23:00',
            logoUrl:
              'data:image/png;base64,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',
          },
        ]}
      />

      <ShoppingCartButton
        className="shopping-cart"
        onClick={onShoppingCartOpen}
      />
    </header>
  );
};
