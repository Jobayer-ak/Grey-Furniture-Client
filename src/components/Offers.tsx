import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineDiscount } from 'react-icons/md';
import { TfiWallet } from 'react-icons/tfi';

function Offers() {
  return (
    <div className="w-full lg:px-[50px] px-[15px] my-12 lg:py-12">
      <div className="flex-none lg:flex justify-center gap-10">
        <div className="w-full text-center px-3">
          <div className="flex justify-center mb-6">
            <BsBoxSeam size={60} color="blue" />
          </div>
          <div className="">
            <h3 className="text-4xl font-bold">Free Delivery</h3>
            <p className="mt-4 text-[18px]">
              FREE home delivery with assembling inside Dhaka within 3 days and
              5-7 days anywhere in Bangladesh. Inside Dhaka City, we offer free
              home delivery to the ground floor through courier.
            </p>
          </div>
        </div>
        <div className="w-full text-center px-3 lg:my-0 my-10">
          <div className="flex justify-center mb-6">
            <MdOutlineDiscount size={60} color="blue" />
          </div>
          <h3 className="text-4xl font-bold">Returns & Warranty</h3>
          <p className="mt-4 text-[18px]">
            GRID provides an easy, hassle-free servicing system where we pick up
            your product from your home if there is any problem and get it back
            to you.
          </p>
        </div>
        <div className="w-full text-center px-3">
          <div className="flex justify-center mb-6">
            <TfiWallet size={60} color="blue" />
          </div>
          <h3 className="text-4xl font-bold">Returns & Warranty</h3>
          <p className="mt-4 text-[18px]">
            To avail EMI, Place your order through Website and share your order
            ID in our Inbox. We will share the EMI payment link.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
