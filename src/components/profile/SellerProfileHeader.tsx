import { MapPin, FilePlus, Loader2Icon, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserMinus } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdChatboxes } from "react-icons/io";
import SellerPostGrid from "./SellerPostGrid";
// import api from "../../services/api/axiosConfig";
import useFollow from "../../hooks/useFollow";
import { ProfileSkeloton } from "./ProfileSkeloton";
import api from "../../services/api/axiosConfig";

export default function SellerProfileHeader() {

  // const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();
  const [profile, setProfile] = useState(true);
  const [Seller, setSeller] = useState(false);
  const [video, setVideo] = useState(true);
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [checkFollowed, setCheckFollowed] = useState(null);

  const { following, createFollower, removeFollower } = useFollow();

  const fetchprofile = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    // const res = await axios.post(`${backendUrl}/post/getprofile/${id}`)
    const res = await axios.post(`${backendUrl}/post/getprofile/${id}`);
    setProfile(res.data.profile);
    setSeller(res.data.sellerposts);
    console.log(res);
  };

  const checkFollowing = () => {
    const val = following.find((follow: any) => follow.followedId._id === id);

    if (val) {
      setCheckFollowed(val);
    }
    setPageLoading(false);
  };

  const runfunction = async () => {
    await fetchprofile();
  };

  useEffect(() => {
    runfunction();
  }, [id]);

  useEffect(() => {
    if (following) {
      checkFollowing();
    }
  }, [following]);

  const handleClick = async () => {
    setLoading(true);
    await createFollower(id);
    await fetchprofile();
    setLoading(false);
  };

  const handleUnfollow = async () => {
    setLoading(true);
    await removeFollower(id);
    await fetchprofile();
    setCheckFollowed(null)
    setLoading(false);
  }


  if (pageLoading) {
    return <ProfileSkeloton />;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="max-w-screen-lg mx-auto mt-2 sm:mt-5 md:mt-10 px-4">
          {/* Profile Section */}
          <div className="flex flex-row items-center md:items-start gap-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-blue-500 rounded-[25%] overflow-hidden">
                <img
                  src={profile?.profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="sm:hidden flex items-center justify-start gap-4 ">
                <h1 className="text font-semibold text-gray-800 dark:text-gray-200">
                  {profile?.fullName}
                </h1>
              </div>
            </div>

            {/* User Info Section */}
            <div className="flex-grow">
              {/* Username and Follow Button */}
              <div className="sm:flex hidden items-center justify-start gap-4 ">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {profile?.fullName}
                </h1>
                <div className="flex gap-4">
                  <IoMdChatboxes
                    onClick={() => Navigate("/messages/" + profile._id)}
                    className="w-6 h-6 text-gray-500 cursor-pointer"
                  />
                  <FaWhatsapp className="w-6 h-6 text-green-500 cursor-pointer" />
                  <MapPin className="w-6 h-6 text-blue-500 cursor-pointer" />
                </div>
              </div>

              {/* Stats Section */}
              <div className="flex gap-2">
                <div className="flex space-x-2 sm:space-x-4 md:space-x-8 mt-4">
                  <div>
                    <span className="block font-semibold text-gray-800 dark:text-gray-200 text-center">
                      {Seller.length}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      posts
                    </span>
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-800 dark:text-gray-200 text-center">
                      {profile?.followers}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      followers
                    </span>
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-800 dark:text-gray-200 text-center">
                      {profile?.following}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      following
                    </span>
                  </div>
                </div>
              </div>

              {/* Full Name and Bio Section */}
              <div className="sm:mt-4 mt-1 bg-gray-300 p-2 rounded-md">
                <h2 className="sm:text-lg text-xs capitalize font-semibold text-gray-800 dark:text-gray-200">
                  {profile?.occupation}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 sm:text-base text-xs">
                  <span>Website @ </span>
                  <a
                    href={`https://${profile?.website}`}
                    className="text-blue-500 hover:underline"
                  >
                    {profile?.website}
                  </a>
                  | {profile?.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* edit button */}
        <div className="sm:mt-4 mt-2 flex gap-4 flex-grow">
          {checkFollowed ? (
            <span className="flex-1 flex items-center justify-center gap-2 px-4 py-1 border border-green-500 rounded-md text-base sm:text-lg font-semibold bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300">
              <Check className="w-5 h-5" />
              Following
            </span>
          ) : (
            <button
              onClick={handleClick}
              className=" flex-1 flex justify-center items-center px-4 py-1 border rounded-md text-base sm:text-lg font-semibold bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 active:scale-95"
            >
              {loading ? <Loader2Icon className="animate-spin" /> : "Follow"}
            </button>
          )}
          {
            checkFollowed ? (
              <button
                onClick={handleUnfollow}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-1 border border-red-500 rounded-md text-base sm:text-lg font-semibold bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-300 hover:bg-red-200 hover:border-red-600 dark:hover:bg-red-700 active:scale-95">
                {/* <FaUserMinus className="w-5 h-5" /> */}
                {loading ? <Loader2Icon className="animate-spin" /> : "Unfollow"}
              </button>
            ) : (
              <button
                onClick={() => console.log("world")}
                className="flex-1 px-4 py-1 border rounded-md text-base sm:text-lg font-semibold bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 active:scale-95"
              >
                Message
              </button>
            )
          }

        </div>

        {/* Video Card Section */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="relative w-full h-[9.5rem] sm:h-60 md:h-72 lg:h-80 overflow-hidden rounded-lg">
              {video ? (
                <video
                  src="https://cdn.pixabay.com/video/2023/12/03/191860-891640938_large.mp4"
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-2">
                      <FilePlus className="h-12 w-12" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                      Add Video
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {Seller ? <SellerPostGrid posts={Seller} /> : null}
    </>
  );
}
