import { Link, useLocation } from "react-router-dom";

const Nav = ({ categoryItm }) => {

    return (
        <nav className="Nav gnb">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/all">all list</Link></li>
                {
                    categoryItm.map((it, idx) => {
                        return (
                            <li key={idx}><Link to={`/${it}`}>{it}</Link></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;