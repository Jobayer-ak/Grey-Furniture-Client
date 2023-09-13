import { CgArrowLongRight } from 'react-icons/cg';
import chair from '../assets/chair.webp';

function Featured() {
  return (
    <div className="w-full lg:px-[50px] px-[15px]">
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
    </div>
  );
}

export default Featured;
