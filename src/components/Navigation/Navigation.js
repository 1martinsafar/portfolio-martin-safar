import React from 'react';
import classes from './Navigation.module.css'

import { NavLink } from "react-router-dom";

const Navigation = () => (
    <nav className={classes.Nav}>
        <ul className={classes.NavList}>
            <li className={classes.Name}>
                <NavLink to="/" className={classes.NavLink} activeClassName={classes.active}>Martin Safar</NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink to="/" exact className={classes.NavLink} activeClassName={classes.active}>Home</NavLink>
                </li>
            <li className={classes.NavItem}>
                <NavLink to="/portfolio" className={classes.NavLink} activeClassName={classes.active}>Portfolio</NavLink>
                </li>
            <li className={classes.NavItem}>
                <NavLink to="/about" className={classes.NavLink} activeClassName={classes.active}>About</NavLink>
                </li>
            <li className={classes.NavItem}>
                <NavLink to="/contact" className={classes.NavLink} activeClassName={classes.active}>Contact</NavLink>
                </li>
        </ul>
    </nav>
);

export default Navigation;