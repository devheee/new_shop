import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import List from "./shop/List";
import ListAll from "./shop/ListAll";



const App = () => {
    // 데이터 가져오기 - state에 배열(쇼핑몰데이터)넣기
    const [shopData, setshopData] = useState([]);
    const url = 'https://desipossa.github.io/shop_cra/assets/data.json'

    // 데이터 불러오는 함수 만들기
    const getData = async () => {
        const r = await axios.get(url); // r = {data:[]}
        setshopData(r.data)
    }

    useEffect(() => {
        getData();
    }, [])

    console.log(shopData)

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="/all" element={<ListAll shopData={shopData} />} />
            </Route>
        </Routes>
    )

}

export default App;