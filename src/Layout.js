import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./pages/Header";

const Layout = ({ shopData, categoryItm, cart }) => {
    return (
        <div className="Wrap">
            <Header cart={cart} categoryItm={categoryItm} />
            <Outlet />
        </div>
    )
}

export default Layout;