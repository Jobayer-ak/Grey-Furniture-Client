import image1 from '../assets/promotion/promotion-1.webp';
import image2 from '../assets/promotion/promotion-2.webp';
import image3 from '../assets/promotion/promotion-3.webp';
import PromotionCard from './ui/PromotionCard';


function FooterPromotion() {
  const title1 = <h4>Exceptional Furniture For The Taskmasters</h4>;
  const title2 = <h4>Ergonomic Design</h4>;
  const title3 = <h4>Wherever you are, work your best.</h4>;

  const desc1 = (
    <p>
      We founded GRID: to make it easy for teams of all sizes to create an
      office you love. We sell direct, so our collection costs half as much as
      premium furniture of comparable quality.
    </p>
  );

  const desc2 = (
    <p>
      Enjoy stylish and ergonomic work seating for every budget, from the home
      office to the open office. Durable, adjustable and built to inspire: make
      your office feel like home with contract-grade desks & chairs from GRID
      Furniture.
    </p>
  );
  
  const desc3 = (
    <p>
      Our breathable mesh material provides an optimal air flow to avoid
      sweating and sticking, keep air circulation for extra comfy, and the mesh
      office chair resists abrasion and transformation.
    </p>
  );

  return (
    <div className="w-full lg:px-[50px] px-[15px] mt-[120px] mb-12">
      <div className="flex-none lg:flex justify-center gap-10">
        <div>
          <PromotionCard
            cardImage={image1}
            title={title1}
            description={desc1}
          />
        </div>
        <div className=''>
          <PromotionCard
            cardImage={image2}
            title={title2}
            description={desc2}
          />
        </div>
        <div>
          <PromotionCard
            cardImage={image3}
            title={title3}
            description={desc3}
          />
        </div>
      </div>

     
    </div>
  );
}

export default FooterPromotion;
