import axios from "axios";
import { useEffect, useState } from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaBars, FaBell, FaTimes, FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const adminUrl = import.meta.env.VITE_Admin_URL;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState([])
  const [settin, setSettin] = useState([])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const fetchheader = async() =>{
    const res = await axios.get(`${backendUrl}/post/fetchheader`)
    console.log(res.data, 'aa rha hai header');
    setValue(res.data.value)
    setSettin(res.data.settin)
  }
useEffect(()=>{
   fetchheader();
},[])
  return (
    <header className="relative top-0 left-0 w-full z-50 bg-white shadow-md fixedtio">
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Hamburger Menu */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Logo */}
        <div className="text-center">
          <img
            src={`${adminUrl}/public/Images/${settin.rectangleLogo}`}
            alt="Logo"
            className="h-8 object-contain mx-auto"
          />
        </div>

        {/* Notification Icon */}
        <div>
          <button className="text-gray-800 focus:outline-none">
            <FaBell className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col mt-4">
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Home
          </li>
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Change Password
          </li>
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Logout
          </li>
          <Link to='/saved'>
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Saved
          </li>
          </Link>
          <Link to='/faq'>
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            FAQ
          </li>
          </Link>
          
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Delete Account
          </li>
          {value.map((item)=>(
            <Link to={`/page/${item.Title}`}><li key={item._id} className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            {item.Title}
          </li></Link>
            
          ))}
        </ul>

        <div className="relative h-screen">
  <ul className="absolute flex justify-center w-full space-x-4 p-4 bg-white" style={{marginBottom:'1px'}}>
    <Link to={settin.facebook}>
    <li>
      <FaFacebook className="text-xl text-blue-600 cursor-pointer" />
    </li>
    </Link>

    <Link to={settin.instagram}>
    <li>
      <FaInstagram className="text-xl text-red-600 cursor-pointer" />
    </li>
    </Link>

    <Link to={settin.twitter}>
    <li>
      <FaX className="text-xl text-black-600 cursor-pointer" />
    </li>
    </Link>

    <Link to={settin.youtube}>
    <li>
      <FaYoutube className="text-xl text-red-600 cursor-pointer" />
    </li>
    </Link>
    <Link to={settin.playstore}>
    <li>
      <BiLogoPlayStore className="text-xl text-gray-800 cursor-pointer" />
    </li>
    </Link>
    
  </ul>
</div>

      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        >
          
        </div>
      )}

    </header>
  );
};

export default Header;
