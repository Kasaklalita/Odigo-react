import React from "react";
import logo from '../../assets/logo.svg'
import cl from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={cl.header}>
      <div className={cl.header__wrapper}>
        <div className={cl.header__logo}>
          <a href="/" className={cl.header__logoLink}>
            <img
              src={logo}
              alt=""
              className={cl.header__logoPic}
            ></img>
          </a>
        </div>
        <nav className={cl.header__nav}>
          <ul className={cl.header__list}>
            <li className={cl.header__item}>
              <a href="#" className={cl.header__link}>
                Articles
              </a>
            </li>
            <li className={cl.header__item}>
              <a href="#" className={cl.header__link}>
                Locations
              </a>
            </li>
            <li className={cl.header__item}>
              <a href="#" className={cl.header__link}>
                Videos
              </a>
            </li>
            <li className={cl.header__item}>
              <a href="#" className={cl.header__link}>
                Sign in
              </a>
            </li>
          </ul>
          <div className={cl.header__navClose}>
            <span className={cl.header__navCloseLine}></span>
            <span className={cl.header__navCloseLine}></span>
          </div>
        </nav>
        <div className={[cl.header__burger, cl.burger]}>
          <span className={cl.burger__line}></span>
          <span className={cl.burger__line}></span>
          <span className={cl.burger__line}></span>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
