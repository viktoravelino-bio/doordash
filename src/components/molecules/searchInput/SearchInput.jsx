import './SearchInput.scss';
import { Fragment, useEffect, useState } from 'react';
import { classNames } from '../../../lib/classNames';
import { CloseIcon, ArrowLeftIcon, SearchIcon } from '../../../assets/icons';
import { Icon } from '../../atoms/icon/Icon';

export const SearchInput = ({
  onChange = () => {},
  value = '',
  onFocus = () => {},
  onBlur = () => {},
  searchResultValues,
  renderItem,
  keyExtractor,
}) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const showSheet =
    inputFocused && Boolean(inputValue) && Boolean(searchResultValues);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  return (
    <div className="search-input__container">
      <div
        className={classNames('search-input__input', { focused: inputFocused })}
      >
        <Icon icon={inputFocused ? ArrowLeftIcon : SearchIcon} size={20} />
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
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
        {inputValue && (
          <Icon icon={CloseIcon} size={18} onClick={() => setInputValue('')} />
        )}
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
