 import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker, LoadScript } from "@react-google-maps/api";
// import 'dotenv/config'

// export default function Home() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
//   });

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading...</div>;

//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// }
