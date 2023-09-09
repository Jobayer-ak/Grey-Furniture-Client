import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

interface IMobileMenu {
  setToggleOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

function NavbarMobile(props: IMobileMenu) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const { setToggleOpen, isOpen } = props;

  const handleToggleIcon = () => {
    setToggleOpen(false);
  };

  console.log("dropdown icon: ", dropDownOpen);

  // useEffect(()=> {setDropDownOpen(dropDownOpen)}, [dropDownOpen])

  return (
    <div className="">
      <div className="">

        {/* cross icon */}
        <div className="flex justify-end px-4 py-4 border-b-[1px] border-slate-200">
          <RxCross1 size={22} color="black" onClick={handleToggleIcon} />
        </div>

        {/* navigation menu */}
        <div className="mt-2">
          <ul className="text-xl">
            <li className="py-3 px-4 border-b-[1px] border-slate-200 relative group">
              <div className="flex justify-between items-center">
                <Link to="/all-collections">All Collection</Link>

               
               {/* dropdown icon open close  */}
                {dropDownOpen ? (
                  <MdOutlineKeyboardArrowDown
                    className="rotate-[180deg] transition-all duration-700 ease-in-out"
                    size={25}
                    onClick={() => setDropDownOpen(false)}
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown
                    className="transition-all duration-700 ease-in-out"
                    size={25}
                    onClick={() => setDropDownOpen(true)}
                  />
                )} 
              </div>

              {/* All Collection's dropdown menu */}
              <ul
                className={` ${
                  dropDownOpen
                    ? 'max-h-[200px] mb-4 transition-max-height duration-300 ease-in-out'
                    : 'max-h-[0px] overflow-hidden transition-max-height duration-300 ease-in-out'
                }`}
              >
                <li className="px-4 py-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                  <h5 className="">Chair</h5>
                </li>
                <li className="px-4 py-2 hover:translate-x-3 transform transition duration-300 ease-in-out group relative">
                  <h5 className="flex items-center ">Table</h5>
                </li>
                <li className="px-4 py-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                  <h5 className="">Sofa</h5>
                </li>
                <li className="px-4 py-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                  <h5 className="">Storage</h5>
                </li>
                <li className="px-4 pt-2 hover:translate-x-3 transform transition duration-300 ease-in-out">
                  <h5 className="">All Collection</h5>
                </li>
              </ul>
            </li>
            <li className="py-3 px-4 border-b-[1px] border-slate-200">
              <Link to="/elevating-desk">Elevating Desk Series</Link>
            </li>
            <li className="py-3 px-4 border-b-[1px] border-slate-200">
              <Link to="/line-collection">Line Collection</Link>
            </li>
            <li className="py-3 px-4 border-b-[1px] border-slate-200">
              <Link to="/about">About</Link>
            </li>
            <li className="py-3 px-4 border-b-[1px] border-slate-200">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="py-3 px-4 border-b-[1px] border-slate-200">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        {/* social icons */}
        <div>
          <FaFacebook/>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
