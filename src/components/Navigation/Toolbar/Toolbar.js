import React from 'react';

import css from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
    <header className={css.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        {props.isDesktop && (
            <nav>
                <NavigationItems isDesktop />
            </nav>
        )}
    </header>
);

export default toolbar;
