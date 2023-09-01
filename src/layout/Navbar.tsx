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
    <div className="mx-[65px]">
      <div className="bg-green-500 flex gap-8 ">
        <div className="mt-6">
          <h3 className="text-2xl text-white font-bold italic bg-[#de885f] p-2 rounded-md">
            GREY
          </h3>
        </div>
        <ul className="flex gap-4 text-xl px-5 py-8">
          <li
            className="flex items-center gap-1 bg-red-500 relative p-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/all-collections">All Collections</Link>

            <MdOutlineKeyboardArrowDown size={25} color="white" />

            <ul className={`absolute ${open? 'mt-[160px]': 'mt-[-99999px]'} transition-all` }>
              <li>Chair</li>
              <li>Table</li>
              <li>Sofa</li>
              <li>Storage</li>
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
