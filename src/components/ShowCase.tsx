import BannerCard from './ui/BannerCard';
import chair from "../assets/banner/inner_banner_chair.webp";
import desk from "../assets/banner/inner_banner_desk_.webp";
import sofa from "../assets/banner/inner_banner_sofa.webp";
import storage from "../assets/banner/inner_banner_storage.webp";

function ShowCase() {
  return (
    <div className=" mx-[50px] my-12 py-12 ">
      <h2 className="text-center text-4xl font-bold">
        We do work furniture a little bit different.
      </h2>
      <p className="text-center mt-4 tracking-widest">
        That means easy, affordable, and flexible—whether you’re furnishing your
        home office or your business.
      </p>

      {/* collection cards */}
      <div className="w-full flex items-cente my-24">
        <BannerCard image={chair} title={ "Chair"} />
        <BannerCard image={desk} title={ "Desk"} />
        <BannerCard image={sofa} title={"Sofa"} />
        <BannerCard image={ storage} title={"Storage"}/>
          </div>
    </div>
  );
}

export default ShowCase;
