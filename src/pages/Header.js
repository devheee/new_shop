import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../images/logo.png";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Cover from "./Cover";

const Header = ({ cart, categoryItm }) => {

    const [toggle, setToggle] = useState(false);

    const scrollEvent = () => {
        let sct = window.scrollY;
        if (sct > 0) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        }
    }, [])

    return (
        <header className={`header _lf ${toggle ? 'on' : ''}`}>
            <h1><a href="/new_shop"><img src={logo} alt="" /></a></h1>
            <div className="service _lf">
                <Search />
                <i className="xi-cart-o cart">
                    <span>{cart.length}</span></i>
                <Cover categoryItm={categoryItm} />
            </div>

        </header>
    )
}

export default Header;