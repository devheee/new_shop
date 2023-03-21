import { Link, Outlet } from "react-router-dom";
import Nav from "./pages/Nav";

import logo from "./images/top_logo.png";

const Layout = ({ categoryItm }) => {
    return (
        <div className="Wrap inner">
            <header className="header">
                <h1><Link to={`/`}> <img src={logo} alt="" /></Link></h1>
            </header>
            <Nav categoryItm={categoryItm} />
            <Outlet />
        </div>
    )
}

export default Layout;