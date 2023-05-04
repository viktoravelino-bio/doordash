
import { GoogleMap } from '../components/molecules/googleMap/GoogleMap';
import { BottomSheet } from '../components/organisms/bottomSheet/BottomSheet';
import { Header } from '../components/organisms/header/Header';

const data = [
  {
    id: 1,
    name: 'Restaurant 1',
    ratings: 4.5,
    numberOfRating: 100,
    distance: '2 min',
    status: 'Open',
    timeOfClosing: '10:00 PM',

    loc: {
      lat: 43.7073902,
      lng: -79.4028136,
    },
    type: 'restaurant',
  },
  {
    id: 2,
    name: 'Market 2',
    ratings: 4.5,
    numberOfRating: 100,
    distance: '2 min',
    status: 'Closed',
    timeOfClosing: '10:00 PM',
    loc: {
      lat: 43.6965209,
      lng: -79.449891,
    },
    type: 'supermarket',
  },
  {
    id: 3,
    name: 'Coffee 3',
    ratings: 4.5,
    numberOfRating: 100,
    distance: '2 min',
    status: 'Open',
    timeOfClosing: '10:00 PM',
    loc: {
      lat: 43.707085,
      lng: -79.3987643,
    },
    type: 'coffee-shop',
  },
];

export function PickupMapPage() {
  return (
    <div>
      <Header />

      <GoogleMap data={data} />

      <BottomSheet isOpen={true} restaurantList={data} />
    </div>
  );
}
