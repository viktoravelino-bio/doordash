import { OverlayView } from '@react-google-maps/api';
import {
  CartIcon,
  CoffeeIcon,
  HouseIcon,
  RestaurantIcon,
} from '../../../assets/icons';
import { Icon } from '../../atoms/icon/Icon';

const TYPE_MAP = {
  supermarket: {
    icon: CartIcon,
    color: 'green',
  },
  restaurant: {
    icon: RestaurantIcon,
    color: 'red',
  },
  'coffee-shop': {
    icon: CoffeeIcon,
    color: 'brown',
  },
  home: {
    icon: HouseIcon,
    color: 'black',
  },
};

export function Marker({ loc, type, onClick = () => {}, active }) {
  return (
    <OverlayView
      position={{ ...loc }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(width, height) => ({
        x: -(width / 2),
        y: -(height / 1),
      })}
    >
      <div className={`marker ${active ? 'active' : ''}`} onClick={onClick}>
        <div>
          <Icon
            icon={TYPE_MAP[type].icon}
            size={20}
            color={TYPE_MAP[type].color}
          />
        </div>
      </div>
    </OverlayView>
  );
}
