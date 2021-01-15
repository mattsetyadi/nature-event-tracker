import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
// import VolcanoMarker from './VolcanoMarker';
import IcebergMarker from './IcebergMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              desc: ev.description,
            })
          }
        />
      );
    }
    // if (ev.categories[0].id === 12) {
    //   return (
    //     <VolcanoMarker
    //       key={ev.id}
    //       lat={ev.geometries[0].coordinates[1]}
    //       lng={ev.geometries[0].coordinates[0]}
    //       onClick={() => setLocationInfo({ id: ev.id, title: ev.title, desc: ev}.description })}
    //     />
    //   );
    // }
    if (ev.categories[0].id === 15) {
      return (
        <IcebergMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              desc: ev.description,
            })
          }
        />
      );
    }

    return null;
  });

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB67NcgVaDRz96G7ti7edrgaIMEEmv2E6I' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
