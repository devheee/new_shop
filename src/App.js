import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import List from "./shop/List";
import ListAll from "./shop/ListAll";
import CateList from "./shop/CateList";
import Itm from "./shop/Itm";
import SearchResult from "./shop/SearchResult";
import Cart from "./shop/Cart";
import Fullpage from "./pages/Main";
import MainSlideList from "./shop/MainSlideList";
import Main from "./pages/Main";



const App = () => {
    // 데이터 가져오기 - state에 배열(쇼핑몰데이터)넣기
    const [shopData, setshopData] = useState([]);
    const [cart, setCart] = useState([]);
    const url = 'https://desipossa.github.io/shop_cra/assets/data.json'

    // 데이터 불러오는 함수 만들기
    const getData = async () => {
        const r = await axios.get(url); // r = {data:[]}
        setshopData(r.data)
    }

    useEffect(() => {
        getData();
    }, [])

    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data[1].rate);
    }

    useEffect(() => {
        getKr()
    }, []);

    const originalItm = shopData.map(it => it.category);
    const productItm = shopData.map(it => it.product_type);
    const filterItm = originalItm.filter(Boolean)
    const categoryItm = [...new Set(filterItm)]


    return (
        <Routes>
            <Route path="/" element={<Layout categoryItm={categoryItm} cart={cart} />}>
                <Route path="/" element={<Main shopData={shopData} sw={sw} />} >
                    <Route index element={<MainSlideList cate={'lipstick'} sw={sw} shopData={shopData} />}></Route>
                    <Route path="tab/lipstick" element={<MainSlideList cate={'lipstick'} sw={sw} shopData={shopData} />}></Route>
                    <Route path="tab/palette" element={<MainSlideList cate={'palette'} sw={sw} shopData={shopData} />}></Route>
                    <Route path="tab/concealer" element={<MainSlideList cate={'concealer'} sw={sw} shopData={shopData} />}></Route>
                </Route>
                <Route path="/all" element={<ListAll shopData={shopData} sw={sw} />} />
                <Route path="/:cate" element={<CateList shopData={shopData} sw={sw} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} sw={sw} />} />
                <Route path="search" element={<SearchResult shopData={shopData} sw={sw} />} />
                <Route path="cart" element={<Cart shopData={shopData} cart={cart} setCart={setCart} />} />
            </Route>
        </Routes>
    )

}

export default App;