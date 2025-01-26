import React from 'react'

import { useState, useEffect } from 'react'
import logo from './assets/1.png'
import ButtonSpecial from './ButtonSpecial'
const Navbar = () => {

    const [navbarSm, setnavbarSm] = useState('header-sm-menu');
    const [isClicked, setIsClicked] = useState('click');

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    let lastScrollY = 0;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Eğer aşağı kaydırıyorsak, navbar'ı gizle
            setIsNavbarVisible(false);
        } else {
            // Eğer yukarı kaydırıyorsak, navbar'ı göster
            setIsNavbarVisible(true);
        }
        lastScrollY = window.scrollY > 0 ? window.scrollY : 0;
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup: Component unmount olduğunda event listener'ı kaldır
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`header  ${isNavbarVisible ? 'header-visible' : 'header-hidden'}`} >
                <div className='header-content'>
                    <button
                        onClick={handleClick}
                        className={`button ${isClicked ? 'click' : 'clicked'}`}
                    >
                        <i className="bi bi-list"></i>
                    </button >
                    <div className='header-logo-container'>
                        <div className='header-logo-img-cont'>
                            <img src={logo} alt="Utku Dava Logo Image" className="header-logo-img" />
                        </div>


                    </div>
                    <div className='header-main'>
                        <ul className="header__links">
                            <li className="header__link-wrapper">
                                <a href="./" className="header__link"> Ansayfa </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#hakkımızda" className="header__link">Hakkımızda </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#hizmetler" className="header__link"> Hizmetlerimiz</a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#iletisim" className="header__link"> İletişim
                                </a>
                            </li>
                            <li className="header__link-wrapper">
                                <ButtonSpecial />
                            </li>
                        </ul>

                    </div>
                </div>
                <div className={`button ${isClicked ? 'header-sm-menu-close' : 'header-sm-menu'}`}>
                    <ul className="header__sm-menu-links p-0">
                        <li className="header__sm-menu-link">
                            <a href="./" onClick={handleClick}> Ansayfa </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#hakkımızda" onClick={handleClick}> Hakkımızda </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#hizmetler" onClick={handleClick}> Hizmetlerimiz </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#iletisim" onClick={handleClick}> iletişim </a>
                        </li>
                    </ul>
                </div>

            </div >



        </>
    )
}

export default Navbar