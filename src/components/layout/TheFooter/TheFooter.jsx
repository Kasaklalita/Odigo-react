import React from "react";
import NarrowWrapper from "../NarrowWrapper/NarrowWrapper";
import cl from "./TheFooter.module.css";
import logo from "../../../assets/odigo-logo.svg"

export default function TheFooter() {
  return (
    <footer className={cl.footer}>
      <NarrowWrapper>
        <div className={cl.footer__item}>
          <div className={cl.footer__logo}>
            <img
              src={logo}
              alt="odigo-logo-footer"
              className={cl.footer__logoPic}
            />
          </div>
          <nav className={cl.footer__nav}>
            <ul className={cl.footer__menu}>
              <li className={cl.footer__menuItem}>
                <h3 className={cl.footer__menuTitle}>Company</h3>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  About
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Team
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Careers
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className={cl.footer__menu}>
              <li className={cl.footer__menuItem}>
                <h3 className={cl.footer__menuTitle}>Locations</h3>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Tokyo
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Kyoto
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Osaka
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Hokkaido
                </a>
              </li>
            </ul>
            <ul className={cl.footer__menu}>
              <li className={cl.footer__menuItem}>
                <h3 className={cl.footer__menuTitle}>Social Media</h3>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Facebook
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Twitter
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  Instagram
                </a>
              </li>
              <li className={cl.footer__menuItem}>
                <a href="" className={cl.footer__menuLink}>
                  YouTube
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </NarrowWrapper>
    </footer>
  );
}
