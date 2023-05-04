import {
  useJsApiLoader,
  GoogleMap as GMComponent,
} from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';

import { styleMap } from './styleMap';
import './style.scss';
import { Marker } from './Marker';

const center = {
  lat: 43.7084164,
  lng: -79.3999791,
};

export function GoogleMapRoot({ data }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const [, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <GMComponent
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
          styles: styleMap,
          disableDoubleClickZoom: true,
          gestureHandling: 'greedy',
        }}
      >
        <>
          <Marker loc={center} type="home" active />
          {data.map((item) => (
            <Marker
              key={item.id}
              {...item}
              onClick={() => console.log(item.id)}
            />
          ))}
        </>
      </GMComponent>
    </>
  ) : (
    <></>
  );
}

export const GoogleMap = memo(GoogleMapRoot);
