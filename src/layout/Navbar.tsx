import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';


function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className="mx-[65px] sticky top-0">
      <div className=" flex gap-8  pt-6">
        <div className="mt-0 ">
          <h3 className="text-2xl text-white font-bold italic bg-[#de885f] rounded-md">
            GREY
          </h3>
        </div>
        <ul className="flex gap-4 text-xl">
          <li
            className="flex items-center gap-1 bg-red-500 relative p-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/all-collections" className="">
              All Collections
            </Link>

            <MdOutlineKeyboardArrowDown size={25} color="white" />
            
              <ul
                className={`absolute ${
                  open
                    ? 'left-0 mt-[160px] translate-y-0 transition-transform duration-600 ease-in-out py-8'
                    : 'mt-[-9999px] -translate-y-[10px] transition-transform duration-600 ease-in-out'
                } -z-10 bg-slate-500 inline-block w-full h-[190px]`}
              >
                <li className="p-1 pt-3">
                  <h5 className="">Chair</h5>
                </li>
                <li className="p-1">
                  <h5 className="">Table</h5>
                </li>
                <li className="p-1">
                  <h5 className="">Sofa</h5>
                </li>
                <li className="p-1"> <h5 className="">Storage</h5></li>
              </ul>
            
          </li>
          <li className="bg-red-500 p-3">
            <Link to="/elevating-desk">Elevating Desk Series</Link>
          </li>
          <li className="bg-red-500 p-3">
            <Link to="/line-collection">Line Collection</Link>
          </li>
          <li className="p-3 bg-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 bg-red-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3 bg-red-500">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-3 bg-red-500">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
