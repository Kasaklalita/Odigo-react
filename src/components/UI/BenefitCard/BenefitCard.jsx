import React from "react";
import church from "../../../assets/church-icon.svg";
import cl from "./BenefitCard.module.css"

export default function BenefitCard({ title, description }) {
  return (
    <div className={cl.benefit__card}>
      <div className={cl.benefit__cardPic}>
        <img
          src={church}
          alt=""
          className={cl.benefit__cardThumb}
        />
      </div>
      <h3 className={cl.benefit__cardTitle}>{title}</h3>
      <p className={cl.benefit__cardDesc}>{description}</p>
      {/* <see-more-link to="#" content="LEARN MORE"></see-more-link> */}
    </div>
  );
}
