import { Search } from 'lucide-react';
import SearchPost from '../components/SearchPost';
// import { posts } from '../data/dummyData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderStatic from '../components/HeaderStatic'
import api from '../services/api/axiosConfig';
const indianCities = [
  { value: "agra", label: "Agra" },
  { value: "ahmedabad", label: "Ahmedabad" },
  { value: "ajmer", label: "Ajmer" },
  { value: "aligarh", label: "Aligarh" },
  { value: "allahabad", label: "Allahabad" },
  { value: "amritsar", label: "Amritsar" },
  { value: "asansol", label: "Asansol" },
  { value: "aurangabad", label: "Aurangabad" },
  { value: "bangalore", label: "Bangalore" },
  { value: "bareilly", label: "Bareilly" },
  { value: "belgaum", label: "Belgaum" },
  { value: "bhilai", label: "Bhilai" },
  { value: "bhopal", label: "Bhopal" },
  { value: "bhubaneswar", label: "Bhubaneswar" },
  { value: "bhiwandi", label: "Bhiwandi" },
  { value: "bidar", label: "Bidar" },
  { value: "bilaspur", label: "Bilaspur" },
  { value: "chandigarh", label: "Chandigarh" },
  { value: "chandrapur", label: "Chandrapur" },
  { value: "chennai", label: "Chennai" },
  { value: "coimbatore", label: "Coimbatore" },
  { value: "cuttack", label: "Cuttack" },
  { value: "dehradun", label: "Dehradun" },
  { value: "delhi", label: "Delhi" },
  { value: "dhanbad", label: "Dhanbad" },
  { value: "durgapur", label: "Durgapur" },
  { value: "faridabad", label: "Faridabad" },
  { value: "firozabad", label: "Firozabad" },
  { value: "ghaziabad", label: "Ghaziabad" },
  { value: "gurgaon", label: "Gurgaon" },
  { value: "guwahati", label: "Guwahati" },
  { value: "gwalior", label: "Gwalior" },
  { value: "howrah", label: "Howrah" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "indore", label: "Indore" },
  { value: "jaipur", label: "Jaipur" },
  { value: "jabalpur", label: "Jabalpur" },
  { value: "jamshedpur", label: "Jamshedpur" },
  { value: "jamnagar", label: "Jamnagar" },
  { value: "jodhpur", label: "Jodhpur" },
  { value: "kanpur", label: "Kanpur" },
  { value: "kota", label: "Kota" },
  { value: "kolkata", label: "Kolkata" },
  { value: "lucknow", label: "Lucknow" },
  { value: "ludhiana", label: "Ludhiana" },
  { value: "madurai", label: "Madurai" },
  { value: "madhyamgram", label: "Madhyamgram" },
  { value: "mangalore", label: "Mangalore" },
  { value: "meerut", label: "Meerut" },
  { value: "mira-bhayandar", label: "Mira-Bhayandar" },
  { value: "mumbai", label: "Mumbai" },
  { value: "muzaffarpur", label: "Muzaffarpur" },
  { value: "nagpur", label: "Nagpur" },
  { value: "nashik", label: "Nashik" },
  { value: "navi-mumbai", label: "Navi Mumbai" },
  { value: "noida", label: "Noida" },
  { value: "patna", label: "Patna" },
  { value: "pondicherry", label: "Pondicherry" },
  { value: "puducherry", label: "Puducherry" },
  { value: "pune", label: "Pune" },
  { value: "raipur", label: "Raipur" },
  { value: "ranchi", label: "Ranchi" },
  { value: "roorkee", label: "Roorkee" },
  { value: "salem", label: "Salem" },
  { value: "siliguri", label: "Siliguri" },
  { value: "sonipat", label: "Sonipat" },
  { value: "surat", label: "Surat" },
  { value: "thane", label: "Thane" },
  { value: "trichy", label: "Trichy" },
  { value: "vadodara", label: "Vadodara" },
  { value: "varanasi", label: "Varanasi" },
  { value: "vijayawada", label: "Vijayawada" },
  { value: "visakhapatnam", label: "Visakhapatnam" },
  { value: "warangal", label: "Warangal" }
];

export default function SearchPage() {
  // const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [info, setInfo] = useState(false)
  const [Loading, setLoading] = useState(false)
  const fetchposts = async () => {
    // const res = await axios.get(`${backendUrl}/post/getsearchresult`)
    const res = await api.get(`/post/getsearchresult`)
    console.log(res.data);
    setInfo(res.data)
  }
  useEffect(() => {
    fetchposts()
  }, [])
  return (
    <>
      <HeaderStatic />
      <div className="mt-8 md:mt-0 max-w-4xl mx-auto p-4 space-y-8">
        <div className=" w-full mx-auto p-4">
          <div className="flex gap-2 ">
            <div className=' relative w-full '>
              <input
                type="text"
                placeholder="Search"
                className=" w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none dark:text-white"
              />

              {Loading && <div className="h-6 w-6 absolute right-1 top-3 rounded-full border-4 border-white border-t-transparent animate-spin"></div>}
            </div>

            <select
              className=" w-20 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none dark:text-white"
            >
              <option value="" disabled selected>
                Select a City
              </option>
              {indianCities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-4">
          <div className=" columns-2 sm:columns-3 md:gap-2 gap-[8px]  ">
            {info ? <SearchPost info={info} /> : null}
          </div>
        </div>
      </div>

    </>
  );
}
