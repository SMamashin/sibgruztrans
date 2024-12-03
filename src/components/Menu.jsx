import { useState } from 'react';
import '../styles/MenuBurger.scss';
import { Button } from './ui/Button';

const MenuBurger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => setIsActive(prev => !prev);
    const closeMenu = () => setIsActive(false);

    // name можно использовать как id для секций, соответвенно сделать якорные ссылки

    const navData = [
        {text: 'О нас', name: 'info'},
        {text: 'Услуги', name: 'saving'}, 
        {text: 'Контакты', name: 'contact-mail'}
    ]

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <a href="" className="nav__logo"><strong>СИБГРУЗТРАНС</strong>.РФ
                        <img src="https://smamashin.ru/e/sibgruztrans/assets/logo.png" className="logo_img"/>
                    </a>
                    <ul className={`nav__menu ${isActive ? 'active' : ''}`}>
                        {navData.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.name}`} className="nav__link" onClick={closeMenu}>
                                    <img src={`https://smamashin.ru/e/sibgruztrans/assets/${item.name.toLowerCase()}.png`}/>{item.text}
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
                    <Button>Заказать</Button>
                    <p>Быстро. Безопасно. Доступно.</p>
                </div>
            </section>
        </>
    );
};

export default MenuBurger;