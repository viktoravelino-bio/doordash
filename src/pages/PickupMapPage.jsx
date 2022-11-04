import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { GoogleMap } from '../components/molecules/googleMap/GoogleMap';
import { Header } from '../components/organisms/header/Header';

const data = [
  {
    id: 1,
    name: 'Restaurant 1',
    loc: {
      lat: 43.7073902,
      lng: -79.4028136,
    },
    type: 'restaurant',
  },
  {
    id: 2,
    name: 'Market 2',
    loc: {
      lat: 43.6965209,
      lng: -79.449891,
    },
    type: 'supermarket',
  },
  {
    id: 3,
    name: 'Coffee 3',
    loc: {
      lat: 43.707085,
      lng: -79.3987643,
    },
    type: 'coffee-shop',
  },
];

export function PickupMapPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header />

      <GoogleMap data={data} />

      {/* <button onClick={() => setOpen(!open)}>Open</button> */}

      <BottomSheet
        open={false}
        blocking={false}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 3,
          maxHeight / 10,
        ]}
      >
        <div style={{ paddingInline: '1rem' }}>
          <h2>All Stores</h2>
          <div
            style={{
              height: '200px',
              width: '200px',
              backgroundColor: 'orange',
              marginInline: 'auto',
            }}
          ></div>
        </div>
      </BottomSheet>
    </div>
  );
}
