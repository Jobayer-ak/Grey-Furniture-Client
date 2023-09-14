import { CgArrowLongRight } from 'react-icons/cg';
import chair from '../assets/chair.webp';
import mainImage from '../assets/featured/1.avif';
import rightImage from '../assets/featured/right.avif';
import leftTop from '../assets/featured/left-top.avif';
import leftDown from '../assets/featured/left-down.avif';

function Featured() {
  return (
    <div className="w-full lg:px-[50px] px-[15px] pt-16 pb-[150px]">
      {/* chair featured */}
      <div className="flex justify-center gap-10 px-10">
        <img src={chair} className="w-[560px]" />
        <div className="px-10">
          <h3 className="font-bold text-4xl">We Create Meaningful Design</h3>
          <p className="mt-6 text-xl">
            GRID ensures you 100% authenticity and originality of the products
            which are imported via China, Vietnam & Taiwan. We never want you to
            compromise with the quality that is why we ensure you get the best
            furniture delivered via GRID!
          </p>
          <p className="mt-6 text-xl">
            1. We assure you 100% premium quality of our products and before the
            delivery of each product, we have 4 product experts who do the
            quality check while the product is ready for delivery.
          </p>
          <p className="mt-6 text-xl">
            2. At GRID, we deliver you premium quality and stylish design which
            also delivers the meaning of elegance at your home.
          </p>
          <p className="mt-6 text-xl">
            3. Our products are made of strong materials imported from China
            which ensure 100% durability.
          </p>

          <div className="group relative mt-4">
            <button className="flex items-center text-xl font-bold border-2 bg-black text-white px-3 py-2 transition-all duration-300 hover:pr-9 hover:translate-x-2 ">
              Shop Now
              <span className="absolute right-0 pr-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CgArrowLongRight size={25} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* line featured */}
      <div className="mt-[120px] flex justify-between px-10">
        {/* image part */}
        <div className="relative w-[500px]">
          {/* Container */}
          <div className="w-full h-full relative">
            {/* Absolute Image */}
            <img src={mainImage} className="absolute top-0 right-0 z-10" />
            <img
              src={rightImage}
              className="absolute top-[30px] right-0 translate-x-[150px] transform duration-300"
            />
            <img
              src={leftTop}
              className={`absolute top-[-50px] right-0 translate-x-0 hover:-translate-x-[220px] transition-transform duration-300 `}
              
            />
            <img
              src={leftDown}
              className="absolute top-[150px] right-0 -translate-x-[190px]"
            />
          </div>
        </div>

        {/* description part */}
        <div className="">
          <h3 className="text-xl">INTRODUCRING</h3>
          <h2 className="text-3xl font-bold">
            GREY LINE <br /> COLLECTION
          </h2>
          <p className="text-xl mt-6">
            You can customize your own shelves from <br /> our multiple line
            items
          </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
