import React from "react";
import PlaceCard from "../../UI/BenefitCard/PlaceCard/PlaceCard";
import WideWrapper from "../WideWrapper/WideWrapper";
import cl from "./ThePlaces.module.css";

export default function ThePlaces() {
  const captions = [
    "Mount Fuji", "Kyoto", "Tokyo", "Niigata", "Sapporo"
  ]
  return (
    <section className={cl.places}>
      <WideWrapper>
        <div className={cl.places__caption}>
          <h2 className={cl.places__title}>
            Get inspired for your next trip
          </h2>
          <see-more-link to="#" content="VIEW ALL"></see-more-link>
        </div>
        <div className={cl.places__cards}>
          {captions.map((caption) => {
            return <PlaceCard caption={caption}/>
          })}
        </div>
      </WideWrapper>
    </section>
  );
}
