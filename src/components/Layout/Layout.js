import React from 'react';
import css from './Layout.module.css';

import Navigation from '../Navigation/Navigation';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  return (
    <React.Fragment>
        <Navigation />
        {/* <SideDrawer /> */}
        <main className={css.Layout}>
            {props.children}
        </main>
    </React.Fragment>
  );
}

export default Layout;
