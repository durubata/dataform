import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

const AnyReactComponent = ({ text, lat, lng }) => <div>{text}</div>;

export function MapInput(props) {
  const [value, setValue] = useState(props.value);

  const onChange = (nValue) => {
    props.onChange({ target: { value: nValue } })
    setValue(nValue)
  }

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
