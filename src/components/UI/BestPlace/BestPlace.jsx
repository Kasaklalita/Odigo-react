import React from "react";
import cl from "./BestPlace.module.css";
import placeImage from "../../../assets/top-1.jpg";

export default function BestPlace({ place }) {
  return (
    <div className={cl.card}>
      <div className={cl.photoContainer}>
        <img src={placeImage} alt="" className={cl.photo} />
        <div className={cl.information}>
          <h3 className={cl.title}>{place.title}</h3>
          <div className={cl.statistics}>
            <div className={cl.likes}>
              <span>{place.likes}</span>
            </div>
            <div className={cl.comments}>
              <span>{place.comments}</span>
            </div>
          </div>
        </div>
      </div>
      <p className={cl.description}>{place.description}</p>
      <a href="" className={cl.seeMore}>
        SEE MORE
      </a>
    </div>
  );
}
