import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

/**
 * @description This is the Map component of the HomePage. But it is not working right now
 * @date 5/9/2023 - 8:11:34 PM
 * @author Yousef Gilany
 *
 * @export
 * @returns {*}
 */
export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      id="google-maps"
      data-testid="google-maps"
      style={{ height: "100vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
}
