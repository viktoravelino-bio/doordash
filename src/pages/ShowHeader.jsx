import { useState } from 'react';
import { AddressSelection } from '../components/atoms/addressSelection/AddressSelection';
import { Header } from '../components/organisms/header/Header';
import { MenuSidebarItem } from '../components/organisms/menuSidebar/atoms/menuSidebarItem/MenuSidebarItem';
import { MenuSidebar } from '../components/organisms/menuSidebar/MenuSidebar';
import { ShoppingCartSidebar } from '../components/organisms/shoppingCartSidebar/ShoppingCartSidebar';

export const ShowHeader = () => {
  const [showMenuSidebar, setShowMenuSidebar] = useState(false);
  const [showShoppingCartSidebar, setShowShoppingCartSidebar] = useState(false);
  return (
    <>
      <Header
        onOpenMenu={() => setShowMenuSidebar(true)}
        onShoppingCartOpen={() => setShowShoppingCartSidebar(true)}
      />

      <AddressSelection />

      <MenuSidebar
        visible={showMenuSidebar}
        onClose={() => setShowMenuSidebar(false)}
      >
        <MenuSidebarItem href="#" label="Home" icon="home" />
        <MenuSidebarItem href="#" label="Pickup" icon="bag" />
        <MenuSidebarItem href="offers" label="Offers" icon="tag" />
        <MenuSidebarItem href="#" label="Home" icon="help" />
        <MenuSidebarItem href="#" label="Sign Up or Sign In" icon="user" />
      </MenuSidebar>

      <ShoppingCartSidebar
        visible={showShoppingCartSidebar}
        onClose={() => setShowShoppingCartSidebar(false)}
      />
    </>
  );
};
