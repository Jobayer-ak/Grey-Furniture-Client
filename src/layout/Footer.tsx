import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

function Footer() {
  return (
    <div className="w-full lg:px-[50px] px-[20px] pt-10 pb-8 bg-black">
      <div className="grid lg:grid-cols-4">
        {/* first part */}
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:border-none border-b-[1px] border-slate-800 pb-10">
          <div className='lg:mt-9 mt-0'>
            <h3 className="text-xl text-left text-white font-bold italic bg-[#de885f] p-2 rounded-md inline-block">
              GREY
            </h3>000
          </div>

          <div className="flex md:justify-start justify-center items-center lg:gap-5 gap-4">
            <div className="bg-white rounded-full p-2">
              <FaFacebookF
                size={25}
                className="hover:rotate-[360deg] transition-all duration-300 ease-in-out "
              />
            </div>
            <div className="bg-white rounded-full p-2">
              <BsInstagram
                size={25}
                className="hover:rotate-[360deg] transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="bg-white rounded-full p-2">
              <BsYoutube
                size={25}
                className="hover:rotate-[360deg] transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* second part */}
        <div className='py-8 lg:border-none border-b-[1px] border-slate-800'>
          <ul className="text-white text-xl">
            <li>Search</li>
            <li className="py-4">Terms of Service</li>
            <li>Return & Warranty Policy</li>
          </ul>
        </div>

        {/* third part */}
        <div className="py-8 lg:border-none border-b-[1px] border-slate-800">
          <ul className="text-white text-xl">
            <li className="pb-2">Home</li>
            <li className="py-2">GREY Chair Collection</li>
            <li className="py-2">GREY Table Collection</li>
            <li className="py-2">GREY Sofa Collection</li>
            <li className="py-2">GREY Storage Collection</li>
            <li className="py-2">All Collections</li>
          </ul>
        </div>

        {/* fourth part */}
        <div className="text-white py-8 ">
          <p className="text-xl">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>

          <form className="mt-6 relative w-full">
            <TfiEmail className="text-white absolute top-[10px] left-4 " size={25} />
            <input
              placeholder="Enter Your Email"
              className="w-full max-w-full outline-0 border-[1px] border-slate-600 p-2 pl-14 bg-black text-white text-xl focus:border-[1px] focus:border-white"
            />
          </form>
        </div>
      </div>

      {/* copy rights part */}
      <div className='text-white text-center'>
        <p>
        &copy; 2023 All rights reserved by GREY Furniture Ltd.
        </p>
      </div>
    </div>
  );
}

export default Footer;
