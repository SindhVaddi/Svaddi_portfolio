
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import classes from "./header.module.css";
import { Container } from "reactstrap";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/My_Work",
    display: "My Work",
  },
  {
    path: "/resume.pdf",
    display: "Resume",
    target: "_blank"
  },
  {
    path: "/Contact",
    display: "Contact",
  },
];

<div className={`${classes.nav__menu}`}>
  {NAV__LINK.map((item) => (
    <a
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      key={item.path}
    >
      {item.display}
    </a>
  ))}
</div>




const Header = () => {
const headerRef = useRef(null);


const menuRef = useRef(null);


const headerFunc = () => {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    headerRef.current.classList.add(`${classes.header__shrink}`);
  } else {
    headerRef.current.classList.remove(`${classes.header__shrink}`);
  }
};




useEffect(() => {
  window.addEventListener("scroll", headerFunc);




  return () => window.removeEventListener("scroll", headerFunc);
}, []);




const toggleMenu = () =>
  menuRef.current.classList.toggle(`${classes.menu__active}`);




return (
  <header className={`${classes.header}`} ref={headerRef}>
    <Container>
      <div className={`${classes.nav__wrapper}`}>
       


        {/* ========= nav menu =========== */}
        <div
          className={`${classes.navigation}`}
          ref={menuRef}
          onClick={toggleMenu}
        >
          <div className={`${classes.nav__menu}`}>
            {NAV__LINK.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.display}
              </Link>
            ))}


          </div>
        </div>




        <span className={`${classes.mobile__menu}`}>
          <i className="ri-menu-line" onClick={toggleMenu}></i>
        </span>
      </div>
    </Container>
  </header>
);
};




export default Header;
