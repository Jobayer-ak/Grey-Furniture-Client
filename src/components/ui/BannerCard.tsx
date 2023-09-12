interface IImage {
  image: string;
  title: string;
}

function BannerCard(props: IImage) {
  return (
   
      <div className="relative group" data-aos="zoom-in">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000] opacity-40 z-10"></div>
        <img src={props.image} alt="collection" width={400} height={250} />

        <h2 className="absolute bottom-0 left-[20px] pb-5 text-white font-bold lg:text-3xl md:text-2xl z-10">
          {props.title}
          <span className="absolute left-0 bottom-4 w-0 h-[2px] bg-white transform group-hover:w-full transition-width duration-500"></span>
        </h2>
      </div>
   
  );
}

export default BannerCard;
