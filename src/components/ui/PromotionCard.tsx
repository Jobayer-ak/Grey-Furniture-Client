interface IPromotion {
  cardImage: string;
  title: JSX.Element;
  description: JSX.Element;
}

function PromotionCard(props: IPromotion) {
  const { cardImage, title, description } = props;

  return (
    <div className="my-6 lg:my-0 w-full">
      <div className="overflow-hidden relative">
        <img
          src={cardImage}
          alt="Promotion"
          className="w-full h-[385px] object-cover hover:scale-105 transition-transform transform origin-center duration-1000 ease-in hover:opacity-90"
        />
      </div>
      <div className="text-center px-2 mt-6">
        <h4 className="font-bold text-2xl my-3">{title}</h4>
        <p className="text-[20px]">{description}</p>
      </div>
    </div>
  );
}

export default PromotionCard;
