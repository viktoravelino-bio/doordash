import { SearchInput } from '../components/molecules/searchInput/SearchInput';
import { restaurantList } from '../assets/data/restaurantList';
export function SearchingInput() {
  console.log(restaurantList);
  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        maxWidth: '500px',
        margin: 'auto auto',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <SearchInput searchResultValues={restaurantList} />
    </div>
  );
}
