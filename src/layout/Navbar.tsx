import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

function Navbar() {
  return (
    <div className="w-full sticky z-[50]">
      <div className="h-full w-full flex justify-end gap-8  pt-12">
        <div className="flex items-center justify-start gap-8 w-full h-full mx-[60px]">
          <div>
            <h3 className="text-2xl text-white font-bold italic bg-[#de885f] rounded-md">
              GREY
            </h3>
          </div>

          <div>
            <ul className="flex gap-5 text-xl">
              <li className="py-2 px-4 text-white hover:text-black hover:bg-white relative group">
                <div className="flex items-center">
                  <Link to="/all-collections">All Collection</Link>

                  <MdOutlineKeyboardArrowDown size={25} className="ml-1" />
                </div>

                <ul className="absolute mt-[-99999px] left-0 pl-3 pb-2 text-black group-hover:mt-[0px] w-full bg-white group-hover:translate-y-2 border-t-[1px]  transform transition duration-300 ease-in-out">
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
                <Link to="/signup">
                  <BsSearch color="white" size={26} />
                </Link>
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
