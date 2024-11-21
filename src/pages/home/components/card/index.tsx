import { CardContainer } from "./card-container/cardContainer";
import { CardInfo } from "./card-info/cardInfo";
import { CardImage } from "./card-image/cardImage";
import { NavLink } from "react-router-dom";

export const Articles = () => {
  return (
    <section className="px-5 py-5 mt-5 flex justify-between flex-col gap-5">
      <NavLink to="">
        <CardContainer>
          <CardImage />
          <CardInfo />
        </CardContainer>
      </NavLink>
      <CardContainer>
        <CardImage />
        <CardInfo />
      </CardContainer>
    </section>
  );
};
