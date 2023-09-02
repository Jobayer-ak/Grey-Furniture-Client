import bgImage from '../assets/grey_hero_image-min_1512x.webp';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
      className="w-full min-h-screen bg-cover bg-center mt-[-160px] relative"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-10 flex justify-center items-center h-screen">
        <div>
          <h2 className="text-4xl font-bold" data-aos="fade-down">Home Page</h2>
          <p className="text-xl" data-aos="fade-up">This is some content on top of the image.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
