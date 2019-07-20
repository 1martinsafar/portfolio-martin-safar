import React, { Component } from "react";
import css from "./Layout.module.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        const { isDesktop } = this.props;
        console.log(`isDesktop: ${isDesktop}`);

        return (
            <React.Fragment>
                <Toolbar
                    isDesktop={isDesktop}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer
                    isDesktop={isDesktop}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={css.Layout}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Layout;
