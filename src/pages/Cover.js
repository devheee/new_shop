import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import ListAll from "../shop/ListAll";


const Cover = ({ categoryItm }) => {
    const [on, setOn] = useState(false);
    // const [toggleMenu, setToggleMenu] = useState(false)
    //  const [toggleBar, setToggleBar] = useState(true)

    const toggleMenu = () => {
        setOn(!on);
    }

    const { pathname } = useLocation();
    // console.log(pathname);

    useEffect(() => {
        setOn(false)
    }, [pathname])

    return (
        <>
            <nav className="bar">
                <ul>
                    <li>
                        <span onClick={() => toggleMenu()} style={{ cursor: "pointer" }}>
                            {on ? <HiOutlineX className="icon" /> : <HiMenu className="icon" />}
                        </span>
                    </li>
                </ul>
            </nav>

            <div className={`cover ${on ? 'on' : ''}`}>
                <ul>
                    <li className="all">
                        <Link to="/all">전체상품</Link>
                    </li>
                    <ul>
                        <li>
                            <p>아이</p>
                            <Link to="eyeshadow">아이섀도우</Link>
                        </li>
                        <li>
                            <Link to="mascara">마스카라</Link>
                        </li>
                        <li>
                            <Link to="eyeliner">아이라이너</Link>
                        </li>
                        <li>
                            <Link to="eyebrow">아이브로우</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>립</p>
                            <Link to="lipstick">립스틱 & 글로스</Link>
                        </li>

                        <li>
                            <Link to="lip_liner">립라이너</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>페이스</p>
                            <Link to="foundation">파운데이션</Link>
                        </li>

                        <li>
                            <Link to="bronzer">컨투어</Link>
                        </li>
                        <li>
                            <Link to="blush">블러셔</Link>
                        </li>
                    </ul>

                </ul>
            </div>

        </>
    )
}

export default Cover;