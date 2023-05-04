import { Avatar } from '../../../atoms/avatar/Avatar';
import './SearchResultItem.scss';

export const SearchResultItem = ({ item }) => {
  const [start, end] = item.todayWorkHours
    .split(' - ')
    .map((time) => time.split(':')[0]);

  const currentHours = new Date().getHours();

  const isOpen = currentHours >= start && currentHours <= end;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="search-input__results__item" href="#">
      <Avatar src={item.logoUrl} />

      <div className="search-input__results__item__body">
        <h4>{item.name}</h4>
        <p className="description">{item.tags.join(', ')}</p>
        <p>
          {isOpen ? `Open • Closes at ${end}` : `Closed • Opens at ${start}`}
        </p>
      </div>
    </a>
  );
};
