import './SearchInput.scss';
import { Fragment, useState } from 'react';
import { classNames } from '../../../lib/classNames';

import { Icon } from '../../atoms/icon/Icon';

export const SearchInput = ({
  onChange,
  value,
  onFocus = () => {},
  onBlur = () => {},
  searchResultValues,
  renderItem,
  keyExtractor,
}) => {
  const [inputFocused, setInputFocused] = useState(false);

  const showSheet =
    inputFocused && Boolean(value) && Boolean(searchResultValues);

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="search-input__container">
      <div
        className={classNames('search-input__input', { focused: inputFocused })}
      >
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
        className={classNames('search-input__results-sheet', {
          show: showSheet,
        })}
      >
        <div className="search-input__results-sheet__list">
          {Boolean(renderItem) &&
            Boolean(searchResultValues) &&
            searchResultValues.map((item) => (
              <Fragment key={keyExtractor(item) || item.id}>
                {renderItem(item)}
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};
