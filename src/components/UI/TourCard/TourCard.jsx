import React from "react";
import cl from "./TourCard.module.css";
import tourImage from "../../../assets/tour-1.jpg"

export default function TourCard({ title, description }) {
  return (
    <div className={cl.tour}>
      <div className={cl.tour__pic}>
        <img src={tourImage} alt="" className={cl.tour__thumb}/>
      </div>
      <div className={cl.tour__info}>
        <h3 className={cl.tour__title}>{title}</h3>
        <p className={cl.tour__description}>{description}</p>
        <see-more-link to="" content="VIEW PREFECTURE"></see-more-link>
      </div>
    </div>
  );
}
