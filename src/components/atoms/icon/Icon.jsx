import {
  ArrowLeftIcon,
  BagIcon,
  ChevronDownIcon,
  CloseIcon,
  CloseOutlinedIcon,
  HelpIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  TagIcon,
  UserIcon,
} from '../../../assets/icons';

const map = {
  'arrow-left': ArrowLeftIcon,
  search: SearchIcon,
  close: CloseIcon,
  'close-outlined': CloseOutlinedIcon,
  menu: MenuIcon,
  home: HomeIcon,
  bag: BagIcon,
  tag: TagIcon,
  help: HelpIcon,
  user: UserIcon,
  'chevron-down': ChevronDownIcon,
};

export const Icon = ({
  icon = 'arrow-left',
  width,
  height,
  size = 24,
  ...rest
}) => {
  const Component = map[icon];

  function getSize() {
    if (width || height) {
      return { width, height };
    }

    return { width: size, height: size };
  }

  return <Component {...getSize()} fill="currentColor" {...rest} />;
};
