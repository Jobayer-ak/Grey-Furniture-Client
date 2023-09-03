import { useEffect } from 'react';
import AOS from 'aos';

interface IImage {
  image: string;
  title: string;
}

function BannerCard(props: IImage) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      easing: 'ease-in-out', // Set the animation easing
    });
  }, []);

  return (
    <div className="w-full">
      <div className="relative group" data-aos="zoom-out">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000] opacity-40 z-10"></div>
        <img src={props.image} alt="collection" width={400} height={250} />

        <h2 className="absolute bottom-0 left-[20px] pb-4 text-white font-bold text-3xl z-20">
          {props.title}
          <span className="absolute left-0 bottom-4 w-0 h-[2px] bg-white transform group-hover:w-full transition-width duration-500"></span>
        </h2>
      </div>
    </div>
  );
}

export default BannerCard;
