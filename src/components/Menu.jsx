import { useState } from 'react';
import '../styles/MenuBurger.scss';

const MenuBurger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <a href="" className="nav__logo"><strong>СИБГРУЗТРАНС</strong>.РФ
                        <img src="https://smamashin.ru/e/sibgruztrans/assets/logo.png" className="logo_img"/>
                    </a>
                    {/*<a className="nav__logo">Ваш <strong>груз</strong> - наш приоритет</a>*/}
                    <ul className={`nav__menu ${isActive ? 'active' : ''}`}>
                        <li><a href="" className="nav__link" onClick={closeMenu}>
                            <img src="https://smamashin.ru/e/sibgruztrans/assets/info.png"/>О нас</a></li>
                        <li><a href="" className="nav__link" onClick={closeMenu}>
                            <img src="https://smamashin.ru/e/sibgruztrans/assets/saving.png"/>Услуги</a>
                        </li>
                        <li><a href="" className="nav__link" onClick={closeMenu}>
                            <img src="https://smamashin.ru/e/sibgruztrans/assets/contact-mail.png"/>Контакты</a></li>
                    </ul>
                    <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                    </div>
                </nav>
            </header>
            <section className="header_img">
                <div className="header_container">
                    <h2>Ваш <strong>груз</strong> - наш приоритет</h2>
                    <button>Заказать</button>
                    <p>Быстро. Безопасно. Доступно.</p>
                </div>
            </section>
        </>
    );
};

export default MenuBurger;