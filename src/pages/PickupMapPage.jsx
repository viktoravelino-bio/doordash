import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { PersonIcon, StarIcon } from '../assets/icons';
import { Icon } from '../components/atoms/icon/Icon';
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
  return (
    <div>
      <Header />

      <GoogleMap data={data} />

      <BottomSheet
        open={true}
        blocking={false}
        defaultSnap={({ maxHeight }) => maxHeight / 3}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 6,
          maxHeight / 3,
          maxHeight / 10,
        ]}
      >
        <div style={{ paddingInline: '1rem' }}>
          <h2>All Stores</h2>

          <div>
            <h3>Aroma Espresso Bar</h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                color: '#767676',
              }}
            >
              <span>
                <Icon icon={StarIcon} size={15} />
                4.6 (194 ratings)
              </span>
              <span>•</span>
              <span>$</span>
              <span>•</span>
              <span>
                <Icon icon={PersonIcon} size={20} />2 min
              </span>
            </div>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}
