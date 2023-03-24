import { Link, Outlet, Route, Routes } from "react-router-dom";
import MainList from "../shop/MainList";
import MainVisual from "./MainVisual";

const Main = ({ shopData, sw }) => {
    const TabData = ['liquid', 'palette', 'concealer']

    return (
        <main>
            <MainVisual />
            <div className="mainTab">
                <h2>BEST PRODUCT</h2>
                <ul className="menu">
                    {
                        TabData.map((it, idx) => { // idx = 0,1,2
                            return <Link to={`/tab/${it}`}>{it}</Link>
                        })
                    }
                </ul>
                <div className="con">
                    <Outlet />
                </div>
            </div>

            <MainList cate={'pencil'} sw={sw} shopData={shopData} />
            <MainList cate={'lipstick'} sw={sw} shopData={shopData} />
        </main>
    )
}

export default Main;