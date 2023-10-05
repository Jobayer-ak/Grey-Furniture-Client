import brack from '../assets/clients/brack.avif';
import rangs from '../assets/clients/rangs.avif';
import standard from '../assets/clients/standard_chartard.avif';
import lankaBangla from '../assets/clients/lankaBangla.avif';
import idlc from '../assets/clients/idlc.avif';
import TenMinutes from '../assets/clients/10mintues.avif';
import shopup from '../assets/clients/ShopUp.avif';
import sheba from '../assets/clients/sheba.webp';
import aksid from '../assets/clients/aksid.webp';
import goodyBro from '../assets/clients/goodybro.avif';
import { useEffect } from 'react';

function Clients() {

  useEffect(() => {
    // Add the "scale-100" class to reveal the images with animation
    const images = document.querySelectorAll(".callout-image");
    images.forEach((image, index) => {
      setTimeout(() => {
        image.classList.add("scale-100");
      }, index * 500); // Delay each image animation
    });
  }, []);

  return (
    <div className="w-full lg:px-[50px] px-[15px] lg:my-[120px] my-[60px]">
      <h3 className="text-4xl font-bold mb-6 text-center">Trusted By Top Companies</h3>

      <div className=''>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-9 items-center p-12">
          <img src={brack} />
          <img src={rangs} />
          <img src={standard} />
          <img src={lankaBangla}/>
          <img src={idlc} />
          <img src={TenMinutes} />
          <img src={shopup} />
          <img src={sheba} />
          <img src={aksid} />
          <img src={goodyBro} />
        </div>
      </div>
      
      
     
      
    </div>
  );
}

export default Clients;
