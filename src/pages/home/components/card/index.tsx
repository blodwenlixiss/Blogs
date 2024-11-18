import { CardContainer } from "./card-container/cardContainer";
import { CardInfo } from "./card-info/cardInfo";
import { CardImage } from "./card-image/cardImage";

export const Articles = () => {
  return (
    <section className="px-5 py-5 mt-5 flex justify-between">
      <CardContainer>
        <CardImage />
        <CardInfo />
      </CardContainer>
      <CardContainer>
        <CardImage />
        <CardInfo />
      </CardContainer>
    </section>
  );
};
