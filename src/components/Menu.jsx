import { useState } from 'react';
import '../styles/MenuBurger.scss';

const MenuBurger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => setIsActive(prev => !prev);
    const closeMenu = () => setIsActive(false);

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <a href="" className="nav__logo"><strong>СИБГРУЗТРАНС</strong>.РФ
                        <img src="https://smamashin.ru/e/sibgruztrans/assets/logo.png" className="logo_img"/>
                    </a>
                    <ul className={`nav__menu ${isActive ? 'active' : ''}`}>
                        {[{name: 'О нас', file: 'info'}, {name: 'Услуги', file: 'saving'}, {name: 'Контакты', file: 'contact-mail'}].map((item, index) => (
                            <li key={index}>
                                <a href="" className="nav__link" onClick={closeMenu}>
                                    <img src={`https://smamashin.ru/e/sibgruztrans/assets/${item.file.toLowerCase()}.png`}/>{item.name}
                                </a>
                            </li>
                        ))}
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