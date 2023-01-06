import React, { useMemo } from "react";
import cl from "./PlaceCard.module.css";
import placePhoto from "../../../../assets/place-1.jpg";

export default function PlaceCard({ caption }) {
  return (
    <figure className={cl.card}>
      <img src={placePhoto} alt="" className={cl.card__picture} />
      <figcaption className={cl.card__title}>{caption}</figcaption>
      <a href="" className={cl.card__link}></a>
    </figure>
  );
}
