import { useState } from 'react';
import { SearchInput } from '../components/molecules/searchInput/SearchInput';
import { ShoppingCartButton } from '../components/atoms/shoppingCartButton/ShoppingCartButton';

export const ShowHeader = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      {/* <ShoppingCartButton /> */}
      <SearchInput value={value} onChange={setValue} searchValues={[{}]} />
    </div>
  );
};
