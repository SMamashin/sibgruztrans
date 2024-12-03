import React from 'react';
import '../styles/About.scss';

const About = () => {
    const cards = [
        {
            id: 1,
            text: "СИБГРУЗТРАНС - это ваш надёжный партнёр для грузоперевозок, который обеспечивает максимальное удобство и безопасность.",
            highlightWords: ["СИБГРУЗТРАНС", "надёжный", "грузоперевозок", "удобство", "безопасность"],
            img: "convenient.png",
        },
        {
            id: 2,
            text: "Мы предлагаем выгодные цены, оперативное выполнение заказов, индивидуальный подход к каждому клиенту.",
            highlightWords: ["выгодные", "индивидуальный", "каждому"],
            img: "best-price.png",
        },
        {
            id: 3,
            text: "Опыт нашей команды в сфере грузоперевозок – это гарантия качественного и своевременного выполнения любых задач.",
            highlightWords: ["Опыт", "грузоперевозок", "качественного", "своевременного"],
            img: "quality.png",
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
        <div className="container">
            <section id="about" className="about">
                {cards.map((card) => (
                    <div className="about-card" key={card.id}>
                        <p>{highlightText(card.text, card.highlightWords)}</p>
                        <img
                            src={`https://smamashin.ru/e/sibgruztrans/assets/${card.img}`}
                            alt="about"
                        />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default About;
