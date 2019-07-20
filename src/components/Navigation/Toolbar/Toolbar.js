import React from 'react';

import css from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
    <header className={css.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={css.DesktopOnly}>
            <NavigationItems isDesktop={props.isDesktop} />
        </nav>
    </header>
);

export default toolbar;
