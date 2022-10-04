import { Avatar } from '../../../../atoms/avatar/Avatar';
import './SearchResultItem.scss';

export const SearchResultItem = () => {
  return (
    <a className="search-input__results__item" href="#">
      <Avatar url="https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/Screen_Shot_2020-06-25_at_3.11.26_PM.png" />

      <div className="search-input__results__item__body">
        <h4>Mc Donald's</h4>
        <p className="description">Burgers, Chicken, Wrap, Fish, Bakery</p>
        <p>Closed • Opens at 11 pm</p>
      </div>
    </a>
  );
};
