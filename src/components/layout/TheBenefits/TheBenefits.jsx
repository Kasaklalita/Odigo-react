import React from "react";
import BenefitCard from "../../UI/BenefitCard/BenefitCard";
import cl from "./TheBenefits.module.css";

export default function TheBenefits() {
  const benefits = [
    {
      title: "Welcome to Odigo!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam soluta dolorum tempora!",
      imageUrl: "../assets/church-icon.svg",
    },
    {
      title: "Your Personal Japan Guide",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vel debitis odio aspernatur ipsam officia ab, quasi!",
      imageUrl: "../assets/person-icon.svg",
    },
    {
      title: "Promoting Local Businesses",
      description:
        "Recusandae voluptate aliquam, iste unde mollitia nesciunt, culpa ipsum perspiciatis similique quibusdam possimus!",
      imageUrl: "../assets/building-icon.svg",
    },
  ];

  return (
    <section className={cl.benefits}>
      <div className={cl.benefits__wrap}>
        <h2 className={cl.benefits__title}>Benefits of Odigo</h2>
        <div className={cl.benefits__cards}>
          {benefits.map((benefit) => {
            return (
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                key={benefit.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
