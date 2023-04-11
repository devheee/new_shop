import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Cover = ({ categoryItm }) => {
    const [on, setOn] = useState(false);

    return (
        <>
            <nav className="bar">
                <ul>
                    <li>
                        <Link onClick={() => setOn(!on)}>
                            <i className="xi-bars"></i>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={`cover ${on ? 'on' : ''}`}>
                <ul>
                    <li>
                        <Link>전체상품</Link>
                    </li>
                    <li>
                        <Link>스킨케어</Link>
                    </li>
                    <li>
                        <Link>스폐셜케어</Link>
                    </li>
                    <li>
                        <Link>메이크업</Link>
                    </li>
                    <li>
                        <Link>바디&헤어</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Cover;