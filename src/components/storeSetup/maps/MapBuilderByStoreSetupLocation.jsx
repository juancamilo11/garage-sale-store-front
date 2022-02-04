import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

const MapBuilderByStoreSetupLocation = ({ address }) => {
  const center = { lat: address.latitude, lgn: address.longitude };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100", width: "500" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDB-I0pz6R9jmC2B1KRhCiHZaqayZQ3MOw" }}
        defaultCenter={center}
        defaultZoom={10}
      ></GoogleMapReact>
    </div>
  );
};

export default MapBuilderByStoreSetupLocation;
