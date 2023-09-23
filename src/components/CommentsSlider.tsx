import image1 from '../assets/promotion/promotion-1.webp';
import image2 from '../assets/promotion/promotion-2.webp';
import image3 from '../assets/promotion/promotion-3.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import "swiper/css/navigation"
// import 'swiper/swiper-bundle.css';

function CommentsSlider() {
  return (
    <div className="w-full min-h-screen lg:px-[50px] md:px-[30px] px-[15px] bg-[#3e3e3e]">
      <div className="py-3">
        <h2 className="text-4xl text-white font-bold text-center my-20">
          Don't take our word for it
        </h2>

        {/* slider */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }} 
         
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            // Define different settings for different screen widths
            640: {
              slidesPerView: 1, // For screens <= 640px wide, show 1 slide at a time
              spaceBetween: 20, // Add some space between slides
            },
            768: {
              slidesPerView: 2, // For screens <= 768px wide, show 2 slides at a time
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // For screens <= 1024px wide, show 3 slides at a time (original setting)
              spaceBetween: 40,
            },
          }}
        >
          
          <SwiperSlide>
            <img src={image1} className='w-full h-[300px]'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} className='w-[700px] h-[300px]'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} className='w-[600px] h-[300px]'/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  ); 
}

export default CommentsSlider;