import React from 'react';
import css from './Navigation.module.css'

import { NavLink } from "react-router-dom";

const Navigation = () => (
    <nav className={css.Nav}>
        <ul className={css.List}>
            <li className={css.Name}>
                <NavLink to="/" className={css.Link} activeClassName={css.active}>Martin Safar</NavLink>
            </li>
            <li className={css.Item}>
                <NavLink to="/" exact className={css.Link} activeClassName={css.active}>Home</NavLink>
                </li>
            <li className={css.Item}>
                <NavLink to="/portfolio" className={css.Link} activeClassName={css.active}>Portfolio</NavLink>
                </li>
            <li className={css.Item}>
                <NavLink to="/about" className={css.Link} activeClassName={css.active}>About</NavLink>
                </li>
            <li className={css.Item}>
                <NavLink to="/contact" className={css.Link} activeClassName={css.active}>Contact</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;