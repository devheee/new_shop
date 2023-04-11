import { Link, useLocation } from "react-router-dom";

const Nav = ({ categoryItm }) => {

    return (
        <nav className="gnb">
            <ul>
                <li>
                    <Link to="/all">
                        <i className="xi-bars"></i>
                    </Link>
                </li>
                {/* {
                    categoryItm.map((it, idx) => {
                        return (
                            <li key={idx}><Link to={`/${it}`}>{it}</Link></li>
                        )
                    })
                } */}
            </ul>
        </nav>
    )
}

export default Nav;