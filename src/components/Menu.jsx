import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Info from '../assets/info.png';
import Services from '../assets/saving.png'
import Contact from '../assets/contact-mail.png'
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
                    <a href="" className="nav__logo"><strong>СИБГРУЗТРАНС</strong>.РФ<img src={Logo} className="logo_img"/></a>
                    {/*<a className="nav__logo">Ваш <strong>груз</strong> - наш приоритет</a>*/}
                    <ul className={`nav__menu ${isActive ? 'active' : ''}`}>
                        <li><a href="" className="nav__link" onClick={closeMenu}>
                            <img src={Info}/>О нас</a></li>
                        <li><a href="" className="nav__link" onClick={closeMenu}>
                            <img src={Services}/>Услуги</a>
                        </li>
                        <li><a href="" className="nav__link" onClick={closeMenu}>
                            <img src={Contact}/>Контакты</a></li>
                    </ul>
                    <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default MenuBurger;