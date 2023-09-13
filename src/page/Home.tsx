import Hero from "../components/Hero";
import ShowCase from "../components/ShowCase";
import FooterPromotion from "../components/FooterPromotion";
import Offers from "../components/Offers";

function Home() {
  return <div className="">
    <Hero />
    <ShowCase /> 
    <Offers/>
    <FooterPromotion/>
  </div>;
}

export default Home;
