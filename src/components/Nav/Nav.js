import React from "react";
import style from './Nav.module.scss';
import { Link } from "./Nav.styled";
import { Outlet } from "react-router-dom";
 
export default function Nav() {
    return (
        <>
            <header className={style.header}>
                <nav className={style.header__container}>
                    <ul className={style.header__menu}>
                        <li className={style.header__menuTitle}>
                            <Link to="/" end>Home</Link>
                        </li>
                        <li className={style.header__menuTitle}>
                            <Link to="/movie">Movie</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}