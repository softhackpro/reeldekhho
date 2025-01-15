import React, { useEffect, useState } from "react";
import { LuMapPin } from "react-icons/lu";
const GetLocation: React.FC = (props) => {
    // console.log(props, 'this is my props');
    // const {createdDate} = props
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  console.log(location?.lat, location?.lng, 'location lattitude');
  
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          setError(null);
        },
        (err) => {
          setError(err.message || "Unable to retrieve your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(()=>{
    getCurrentLocation()
  },[])
  return (
    // <div className="p-4">
    //   <button
    //     onClick={getCurrentLocation}
    //     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    //   >
    //     Get Current Location
    //   </button>

    //   {location && (
    //     <div className="mt-4 text-gray-800">
    //       <p>Latitude: {location.lat}</p>
    //       <p>Longitude: {location.lng}</p>
    //     </div>
    //   )}

    //   {error && (
    //     <div className="mt-4 text-red-500">
    //       <p>Error: {error}</p>
    //     </div>
    //   )}
    // </div>

    <div className="flex justify-between items-center">
  
  {/* Right side: Icon with Distance */}
  <span onClick={() => alert("check last day")} className="flex items-center text-xs">
    <LuMapPin className="mr-1" style={{height:'22px', width:'22px'}}/> 
    <span style={{fontSize:'15px', color:'blue'}}>1.4 km</span>
  </span>
</div>
  );
};

export default GetLocation;
