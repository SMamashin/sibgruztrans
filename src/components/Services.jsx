import React from "react";
import "../styles/Services.scss";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "ГРУЗОПЕРЕВОЗКА",
      description: "Безопасность: надежные упаковочные материалы и специальные методы фиксации грузов.",
      highlightWords: ["Безопастность","надежные", "специальные"],
      img: "blue_truck.jpg",
    },
    // {
    //   id: 2,
    //   title: "СБОРКА МЕБЕЛИ",
    //   description: "Услуга предлагает профессиональное выполнение монтажа различной мебели интерьера.",
    //   highlightWords: ["Услуга","профессиональное", "различной"],
    //   img: "meb.webp",
    // },
    {
      id: 3,
      title: "РАЗНОРАБОЧИЙ",
      description:
          "Услуга включает в себя предоставление квалифицированного рабочего на временной основе.",
      highlightWords: ["Услуга","квалифицированного", "временной", "постоянной", "различных"],
      img: "rab.webp",
    },
  ];

  const highlightText = (text, words) => {
    const regex = new RegExp(`(${words.join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
        words.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
            <span key={index} className="highlight">
          {part}
        </span>
        ) : (
            part
        )
    );
  };

  return (
      <div className="card-container">
        {cards.map((card) => (
            <div className="card" key={card.id} >
              <img
                  src={`https://smamashin.ru/e/sibgruztrans/assets/${card.img}`}
                  alt={card.title}
                  className="card-image"
              />
              <h3 className="card-title">{card.title}</h3>
              <hr />
              <p className="card-description">
                {highlightText(card.description, card.highlightWords)}
              </p>
              <button className="card-button">ПЕРЕЙТИ</button>
            </div>
        ))}
      </div>
  );
};

export default Services;
