import { useState } from "react";
import MainList from "../shop/MainList";
import MainSlideList from "../shop/MainSlideList";
import MainVisual from "./MainVisual";

const Main = ({ shopData, sw }) => {
    const [num, setNum] = useState(0);
    const TabData = [
        { title: 'liquid', con: <MainSlideList cate={'liquid'} sw={sw} shopData={shopData} /> },
        { title: 'palette', con: <MainSlideList cate={'palette'} sw={sw} shopData={shopData} /> },
        { title: 'concealer', con: <MainSlideList cate={'concealer'} sw={sw} shopData={shopData} /> }
    ]
    return (
        <main>
            <MainVisual />
            <div className="mainTab">
                <ul className="menu">
                    {TabData.map((it, idx) => { // idx = 0,1,2
                        return <li onClick={() => setNum(idx)} key={idx}>{it.title}</li>
                    })}
                </ul>
                <div className="con">
                    {
                        TabData[0].con
                    }
                </div>
            </div>

            <MainList cate={'pencil'} sw={sw} shopData={shopData} />
            <MainList cate={'lipstick'} sw={sw} shopData={shopData} />
        </main>
    )
}

export default Main;