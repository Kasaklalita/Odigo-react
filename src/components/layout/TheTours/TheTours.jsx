import React from "react";
import TourCard from "../../UI/TourCard/TourCard";
import WideWrapper from "../WideWrapper/WideWrapper";
import cl from "./TheTours.module.css";

export default function TheTours() {
  const tours = [
    {
      reversed: false,
      title: "Prefecture in Focus: Tottori",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptates, impedit, veniam, vero, numquam architecto nostrum deleniti sequi atque iste dignissimos ducimus iure? Natus voluptatem, earum sit error facilis, inventore?",
    },
    {
      reversed: true,
      title: "Featured Neighborhood: Kyoto’s Arashiyama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero architecto aliquam quasi aliquid, nostrum culpa optio quibusdam itaque voluptatum maiores harum, corrupti eos minima ullam ipsam impedit, cupiditate debitis suscipit.",
    },
  ];
  return (
    <div className={cl.tours}>
      <WideWrapper>
        <div className={cl.tours__wrap}>
          {tours.map((tour) => {
            return (
              <TourCard
                title={tour.title}
                description={tour.description}
                key={tour.title}
              />
            );
          })}
        </div>
      </WideWrapper>
    </div>
  );
}
