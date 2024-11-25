import '../styles/About.scss';

const About = () => {

    return (
        <>
            <div className="container">
                <section id="about" className="about">
                    <div className="about-card">
                        <p><strong className="card_title">СИБГРУЗТРАНС</strong><br/>
                            - это ваш <strong>надёжный</strong> партрнёр для <strong>грузоперевозок</strong>,
                            который обеспечитвает максимальное <strong>удобство</strong> и <strong>безопастность</strong>.</p>
                        <img src='https://smamashin.ru/e/sibgruztrans/assets/convenient.png'/>
                    </div>
                    <div className="about-card">
                        <p>Мы предлагаем <strong>выгодные</strong> цены, оперативное выполнение заказов, <strong>индивидуальный</strong> подход к <strong>каждому</strong> клиенту..</p>
                        <img src='https://smamashin.ru/e/sibgruztrans/assets/best-price.png'/>
                    </div>
                    <div className="about-card">
                        <p><strong>Опыт</strong> нашей команды в сфере <strong>грузоперевозок</strong> – это гарантия <strong>качественного</strong> и <strong>своевременного</strong> выполнения любых задач.</p>
                        <img src="https://smamashin.ru/e/sibgruztrans/assets/quality.png"/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;