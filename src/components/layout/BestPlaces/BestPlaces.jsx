import React from "react";
import BestPlace from "../../UI/BestPlace/BestPlace";
import WideWrapper from "../WideWrapper/WideWrapper";
import cl from "./BestPlaces.module.css";

export default function BestPlaces() {
  const places = [
    {
      title: "NAGOYA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 221,
      comments: 55,
    },
    {
      title: "NIIGATA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sit esse iusto, dolorum aliquam modi autem sed repellendus quaerat voluptate perspiciatis alias. Molestiae eum enim, a nihil sunt, deleniti eos.",
      likes: 145,
      comments: 67,
    },
    {
      title: "OSAKA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam odio harum repellendus voluptas praesentium, voluptatibus ipsum nisi at, esse quidem, reiciendis.",
      likes: 684,
      comments: 34,
    },
    {
      title: "SAITAMA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci asperiores corporis quasi! Ea cumque natus, aliquam aspernatur. Totam tenetur hic fugit eius libero quam et sit ipsa ab enim!",
      likes: 124,
      comments: 43,
    },
    {
      title: "UENO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis dignissimos sed. Molestiae corporis eos labore repellat a dolores necessitatibus nemo minus est, iusto itaque excepturi aliquid expedita distinctio quia.",
      likes: 341,
      comments: 67,
    },
    {
      title: "SHIBUYA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, omnis tempore! Fugit, alias assumenda sint. Molestiae, reiciendis iure id recusandae, a perferendis sequi laborum autem magnam voluptas omnis, quas delectus.",
      likes: 151,
      comments: 48,
    },
  ];

  return (
    <section className={cl.top}>
      <WideWrapper>
        <div className={cl.topPlaces__caption}>
          <h2 className={cl.topPlaces__title}>Today top places to visit</h2>
          <see-more-link to="#" content="VIEW ALL"></see-more-link>
        </div>
        <div className={cl.top__cards}>
          {places.map((place) => {
            return <BestPlace place={place} key={place.title} />;
          })}
        </div>
      </WideWrapper>
    </section>
  );
}
