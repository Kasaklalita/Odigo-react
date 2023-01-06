import React from "react";
import cl from "./BestPlace.module.css";
import placeImage from "../../../assets/top-1.jpg"

export default function BestPlace({ place }) {
  return (
    <div className={cl.card}>
      <div className={cl.card__pic}>
        <img src={placeImage} alt="" className={cl.card__thumb} />
        <div className={cl.card__stat}>
          <h3 className={cl.card__title}>{place.title}</h3>
          <div className={cl.card__likes}>
            <span className={cl.card__likesValue}>{place.likes}</span>
          </div>
          <div className={cl.card__comments}>
            <span className={cl.card__commentsValue}>{place.comments}</span>
          </div>
        </div>
      </div>
      <p className={cl.card__description}>{place.description}</p>
      <a href="" className={cl.card__more}>
        SEE MORE
      </a>
    </div>
  );
}
