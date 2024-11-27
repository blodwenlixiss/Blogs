import { CardContainer } from "./card-container/cardContainer";
import { CardInfo } from "./card-info/cardInfo";
import { CardImage } from "./card-image/cardImage";
import { NavLink } from "react-router-dom";
import { Authors } from "./authors";

export const Articles = () => {
  return (
    <div className="px-5 py-5 mt-5 flex gap-5">
      <section className="w-2/3 flex flex-col gap-5">
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
      <aside className="w-1/3">
        <Authors />
      </aside>
    </div>
  );
};
