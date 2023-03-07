import { Fragment } from "react"
import MainHeader from "./main-header";
import MainNavigation from "./main-navigation";
function Layout(props) {
    return (
      <Fragment>
        <MainHeader/>
        <MainNavigation/>
        <main>{props.children}</main>
      </Fragment>
    );
}

export default Layout;