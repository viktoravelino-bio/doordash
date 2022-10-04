import './SearchInput.scss';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../atoms/icon/Icon';
import { SearchResultItem } from './atoms/searchResultItem/SearchResultItem';

export const SearchInput = ({
  onChange,
  value,
  onFocus = () => {},
  onBlur = () => {},
  searchValues,
}) => {
  const [inputFocused, setInputFocused] = useState(false);
  const sheetRef = useRef(null);

  const showSheet = inputFocused && value && searchValues;

  function handleChange(e) {
    onChange(e.target.value);
  }

  useEffect(() => {
    if (!showSheet) {
      sheetRef.current.classList.remove('animate__fadeIn');
      sheetRef.current.classList.add('animate__fadeOut');
    } else {
      sheetRef.current.style.display = 'block';
    }
  }, [showSheet]);

  return (
    <div className="search-input__container">
      <div className={`search-input__input ${inputFocused && 'focused'}`}>
        <Icon icon={inputFocused ? 'arrow-left' : 'search'} size={20} />
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleChange}
          onFocus={(e) => {
            setInputFocused(true);
            onFocus(e);
          }}
          onBlur={(e) => {
            setInputFocused(false);
            onBlur(e);
          }}
        />
        {value && <Icon icon="close" size={18} onClick={() => onChange('')} />}
      </div>

      <div
        className={`search-input__results-sheet animate__animated ${
          showSheet ? 'show' : ''
        }`}
        ref={sheetRef}
        onAnimationEnd={() => {
          if (!showSheet) {
            sheetRef.current.style.display = 'none';
          }
        }}
      >
        <div className="search-input__results-sheet__list">
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </div>
      </div>
    </div>
  );
};
