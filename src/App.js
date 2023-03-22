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

    const originalItm = shopData.map(it => it.category);
    const filterItm = originalItm.filter(Boolean)
    const categoryItm = [...new Set(filterItm)]

    console.log(categoryItm)

    return (
        <Routes>
            <Route path="/" element={<Layout categoryItm={categoryItm} cart={cart} />}>
                <Route index element={<List />} />
                <Route path="/all" element={<ListAll shopData={shopData} />} />
                <Route path="/:cate" element={<CateList shopData={shopData} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
                <Route path="search" element={<SearchResult shopData={shopData} />} />
                <Route path="cart" element={<Cart shopData={shopData} cart={cart} setCart={setCart} />} />
            </Route>
        </Routes>
    )

}

export default App;