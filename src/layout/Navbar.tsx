import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleMouseOver = () => {
    setOpen(true);
  };

  console.log('Open:', open);

  return (
    <div className="mx-[65px] sticky z-[50]">
      <div className=" flex gap-8  pt-6">
        <div className="mt-0 ">
          <h3 className="text-2xl text-white font-bold italic bg-[#de885f] rounded-md">
            GREY
          </h3>
        </div>
        <ul className="flex gap-8 text-xl p-2">
          <li className="flex items-center gap-1 p-4 pt-2 text-white hover:text-black hover:bg-white relative group">
            <Link to="/all-collections">All Collection</Link>
            <div>
              <MdOutlineKeyboardArrowDown size={25} />
            </div>

            <ul className="absolute mt-[-99999px] left-0 pl-3 pb-2 text-black group-hover:mt-[178px] w-full bg-white group-hover:translate-y-10 transform transition duration-300 ease-in-out">
              <li className="p-1 pt-3 hover:translate-x-3 transform transition duration-300 ease-in-out">
                <h5 className="">Chair</h5>
              </li>
              <li className="p-1 hover:translate-x-3 transform transition duration-300 ease-in-out group relative">
                <h5 className="flex items-center ">Table</h5>
              </li>
              <li className="p-1 hover:translate-x-3 transform transition duration-300 ease-in-out">
                <h5 className="">Sofa</h5>
              </li>
              <li className="p-1 hover:translate-x-3 transform transition duration-300 ease-in-out">
                <h5 className="">Storage</h5>
              </li>
              <li className="p-1 hover:translate-x-3 transform transition duration-300 ease-in-out">
                <h5 className="">All Collection</h5>
              </li>
            </ul>
          </li>
          <li className="p-1 text-white">
            <Link to="/elevating-desk">Elevating Desk Series</Link>
          </li>
          <li className="p-1 text-white">
            <Link to="/line-collection">Line Collection</Link>
          </li>
          <li className="p-1 text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="p-1 text-white">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <div className="flex justify-center gap-8 ml-7"> */}
          <li className="p-1 ">
            <Link to="/login" className="">
              <CgProfile color="white" size={30} />
            </Link>
          </li>
          <li className="p-1 ">
            <Link to="/signup">
              <BsSearch color="white" size={26} />
            </Link>
          </li>
          <li className="p-1">
            <Link to="/signup">
              <AiOutlineShoppingCart color="white" size={30} />
            </Link>
          </li>
          {/* </div> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
