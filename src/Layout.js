import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import RightBanner from "./pages/RightBanner";

const Layout = ({ shopData, categoryItm, cart }) => {
    return (
        <div className="Wrap">
            <Header cart={cart} categoryItm={categoryItm} />
            <Outlet />
            <Footer />
            {/* <RightBanner /> */}
        </div>
    )
}

export default Layout;