import { CgArrowLongRight } from 'react-icons/cg';
import chair from '../assets/chair.webp';
import mainImage from '../assets/featured/1.avif';
import rightTop from '../assets/featured/right-top.webp';
import rightDown from '../assets/featured/right.avif';
import leftTop from '../assets/featured/left-top.avif';
import leftDown from '../assets/featured/left-down.avif';
import { useEffect, useRef, useState } from 'react';

function Featured() {
  const [isMounted, setIsMounted] = useState(true);

  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // The viewport
      rootMargin: '0px',
      threshold: 0.9, // Trigger when 50% of the component is in view
    };

    const observer = new IntersectionObserver(([entry]) => {
      // Check if the component is intersecting with the viewport
      if (entry.isIntersecting) {
        setInView(true);
        // You can perform any actions or trigger animations here
      } else {
        setInView(false);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // return () => {
    // Component unmounted, set isMounted to false
    setIsMounted(false);
    // };
  }, []);

  return (
    <div className="w-full lg:px-[50px] md:px-[30px] px-[15px] pt-16 pb-[150px] border-b-[1px] border-slate-200">
      {/* chair featured */}
      <div className=" lg:flex justify-around">
       
          <img src={chair} className='lg:w-[540px] w-full lg:px-0 px-4'/>
        
        <div className="w-full lg:w-1/3 px-4 lg:px-0 lg:mt-0 mt-10">
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

          <div className="group relative lg:mt-4 mt-8">
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
      <div
        ref={targetRef}
        className="mt-[180px] flex-none lg:flex justify-around gap-[120px]"
      >
        <div className="relative lg:w-[400px] w-full">
          <div className="w-full h-full relative">
            <div className=" flex lg:justify-end justify-center">
              <img src={mainImage} className="z-20 shadow-2xl lg:w-auto md:w-auto w-[180px] " />
            </div>
            <img
              src={rightDown}
              className={` ${
                !inView
                  ? 'absolute top-0 lg:right-0 md:right-[240px] right-[120px]'
                  : 'absolute top-[80px] md:top-[120px] lg:top-[120px] lg:right-[-35px] md:right-[85px] right-0 lg:translate-x-[90px] translate-x-[-15px]'
              } lg:w-auto md:w-auto w-[110px]`}
            />
            <img
              src={rightTop}
              className={` ${
                !inView
                  ? 'absolute top-0 lg:right-0 md:right-[240px] right-[120px] transition-all duration-2000 ease-in-out'
                  : 'absolute top-[30px] md:top-[50px] right-0 md:right-[110px] lg:right-[-10px] translate-x-[-40px] lg:translate-x-[70px]' 
              } lg:w-auto md:w-auto w-[70px]`}
            />
            <img
              src={leftTop}
              className={` ${
                !inView
                  ? 'absolute top-0 lg:right-0 md:right-[240px] right-[120px] transition-all duration-2000 ease-in-out'
                  : 'absolute top-[-40px] lg:right-0 md:right-[230px] right-0 -translate-x-[220px] transition-transform duration-2000 ease-in-out'
              } lg:w-auto md:w-auto w-[120px]`}
            />
            <img
              src={leftDown}
              className={` ${
                !inView
                  ? 'absolute top-0 lg:right-0 md:right-[240px] right-[120px] transition-all duration-2000 ease-in-out'
                  : 'absolute top-[100px] lg:top-[150px] md:top-[150px] lg:right-0 md:right-[200px] right-0 -translate-x-[200px] lg:-translate-x-[175px]'
                } lg:w-auto md:w-auto w-[120px]`}
              
            />
          </div>
        </div>

        <div className="lg:mt-0 mt-[160px] px-[20px]">
          <h3 className="text-xl tracking-widest">INTRODUCRING</h3>
          <h2 className="text-4xl font-bold mt-3">
            GREY LINE <br /> COLLECTION
          </h2>
          <p className="text-xl mt-6 tracking-wider">
            You can customize your own shelves from <br /> our multiple line
            items
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
