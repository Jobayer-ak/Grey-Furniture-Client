import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import NavbarModile from '../components/NavbarMobile';
import Search from '../components/Search';

function Navbar() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleToggleMenu = () => {
    setToggleOpen(!toggleOpen);
  };

  useEffect(() => {
    setToggleOpen(false);
  }, []);



  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="w-full z-20 sticky">
      <div className="h-full w-full flex justify-end gap-8 pt-4 lg:pt-12 relative">
        <div className="flex items-center lg:justify-start justify-between  gap-8 w-full h-full mx-[20px] lg:mx-[60px]">
          <div>
            <h3 className="text-2xl text-white font-bold italic bg-[#de885f] rounded-md">
              GREY
            </h3>
          </div>
          {/* burger menu for mobile */}
          <div className="lg:hidden flex items-center justify-center gap-4">
            <button className="" onClick={handleSearch}>
              <BsSearch color="white" size={26} />
            </button>
            <button
              onClick={handleToggleMenu}
              // className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 510 511"
                id="menu"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M356 181H156V166H356V181zM283.017 256.352L156.001 256 156.043 241 283.059 241.352 283.017 256.352zM356.004 331H156.004V316H356.004V331z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button>
              <AiOutlineShoppingCart color="white" size={30} />
            </button>
          </div>


          {/* search  */}
          <div
            className={`absolute bg-white  transition-all duration-500 ease-in-out z-20 ${
              openSearch
                ? 'top-0 left-0 right-0 w-full'
                : 'left-0 top-[-1500px] right-0'
            }`}
          >
            <Search setOpenSearch={setOpenSearch} openSearch={openSearch} />
          </div>


          {/* rightNavMenu drawer for mobile and tab */}
          <div
            className={`bg-white text-black fixed z-20 transition-all duration-500 ease-in-out ${
              toggleOpen
                ? 'right-0 top-0 bottom-0 w-5/6'
                : 'w-0 right-[-1500px] top-0 bottom-0'
            }`}
          >
            <NavbarModile setToggleOpen={setToggleOpen} isOpen={toggleOpen} />
          </div>

          {/* for large screen */}
          <div className="lg:block hidden">
            <ul className="flex gap-5 text-xl">
              <li className="py-2 px-4 text-white hover:text-black hover:bg-white relative group">
                <div className="flex items-center">
                  <Link to="/all-collections">All Collection</Link>

                  <MdOutlineKeyboardArrowDown size={25} className="ml-1" />
                </div>

                <ul className="absolute mt-[-99999px] left-0 pl-3 pb-2 text-black group-hover:mt-[0px] w-full bg-white group-hover:translate-y-2 border-t-[1px] transform transition duration-300 ease-in-out">
                  <li className="p-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                    <h5 className="">Chair</h5>
                  </li>
                  <li className="p-2 hover:translate-x-3 transform transition duration-300 ease-in-out group relative">
                    <h5 className="flex items-center ">Table</h5>
                  </li>
                  <li className="p-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                    <h5 className="">Sofa</h5>
                  </li>
                  <li className="p-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                    <h5 className="">Storage</h5>
                  </li>
                  <li className="p-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                    <h5 className="">All Collection</h5>
                  </li>
                </ul>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to="/elevating-desk">Elevating Desk Series</Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to="/line-collection">Line Collection</Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="py-2 px-4 text-white">
                <Link to="/contact">Contact</Link>
              </li>
              {/* <div className="flex justify-center gap-8 ml-7"> */}
              <li className="py-2 px-4 ">
                <Link to="/login" className="">
                  <CgProfile color="white" size={30} />
                </Link>
              </li>
              <li className="py-2 px-4 ">
                <button onClick={() => handleSearch(true)}>
                  <BsSearch color="white" size={26} />
                </button>
              </li>
              <li className="py-2 px-4">
                <Link to="/signup">
                  <AiOutlineShoppingCart color="white" size={30} />
                </Link>
              </li>
              {/* </div> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
