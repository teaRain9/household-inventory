import { Fragment } from "react"
import MainHeader from "./main-header";
function Layout(props) {
    return (
      <Fragment>
        <MainHeader/>
        <main className='main'>{props.children}</main>
      </Fragment>
    );
}

export default Layout;