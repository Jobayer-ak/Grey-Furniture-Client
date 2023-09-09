import bgImage from '../assets/grey_hero_image-min_1512x.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';


function Hero() {
  const backgroundImage = `url(${bgImage})`;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      easing: 'ease-in-out', // Set the animation easing
    });
  }, []);


  return (
    <div
      data-aos="zoom-out"
      className="min-w-screen min-h-screen bg-cover bg-center mt-[-172px] relative"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#121211] opacity-90 z-10"></div>
      <div className="relative z-10 flex justify-center items-center h-screen">
        <div className="mt-10">
          <h1
            className="lg:text-7xl text-4xl font-extrabold text-white"
            data-aos="fade-down"
          >
            Modern Furniture
          </h1>
          <div className="flex justify-center items-center mt-3">
            <h3 className="lg:text-2xl text-white tracking-widest">
              FOR A BETTER WAY TO WORK
            </h3>
          </div>
          <div className="flex justify-center items-center mt-6 text-white ">
            <div className="flex items-center gap-2 text-2xl  group relative">
              <button className="flex items-center text-xl font-bold border-2 pbg-blue-500 text-white px-3 py-2 transition-all duration-300 hover:pr-9 hover:translate-x-2 hover:bg-white hover:text-black">
                Shop Now
                <span className="absolute right-0 pr-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CgArrowLongRight size={25}/>
                </span>
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
