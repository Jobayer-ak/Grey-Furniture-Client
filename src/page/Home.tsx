import bgImage from '../assets/grey_hero_image-min_1512x.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

function Home() {
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
      className="w-full min-h-screen bg-cover bg-center mt-[-172px] relative"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#121211] opacity-90 z-10"></div>
      <div className="relative z-10 flex justify-center items-center h-screen">
        <div>
          <h1
            className="text-7xl font-extrabold text-white"
            data-aos="fade-down"
          >
            Modern Furniture
          </h1>
          <div className="flex justify-center items-center mt-3">
            <h3 className="text-2xl text-white tracking-widest">
              FOR A BETTER WAY TO WORK
            </h3>
          </div>
          <div className="flex justify-center items-center mt-4 group relative">
            <button className="flex items-cener justify-center text-2xl text-white border-2 py-2 px-4 group-hover:bg-white hover:text-black">
              Shop Now
              < CgArrowLongRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
