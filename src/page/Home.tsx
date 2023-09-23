import Hero from '../components/Hero';
import ShowCase from '../components/ShowCase';
import FooterPromotion from '../components/FooterPromotion';
import Offers from '../components/Offers';
import Clients from '../components/Clients';
import Featured from '../components/Featured';
import CommentsSlider from '../components/CommentsSlider';

function Home() {
  return (
    <div className="">
      <Hero />
      <ShowCase />
      <Offers />
      <Clients />
      <Featured />
      <CommentsSlider/>
      <FooterPromotion />
    </div>
  );
}

export default Home;
