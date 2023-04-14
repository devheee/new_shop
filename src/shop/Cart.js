import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = ({ shopData, cart, setCart }) => {
    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data);
    }

    useEffect(() => {
        getKr();
    }, []);

    // const allPrice = Number(cart[0].price) + Number(cart[1].price);
    const allPrice = cart.reduce((current, next) => current + Number(next.price * next.num), 0);

    // cart 배열 전체 수정
    const crarModify = (id) => {
        console.log("변함 : ", id, cart);
        // id 같은 요소를 변경하고 그 요소가 포함된 새배열로 cart를 바꿔준다.
        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num + 1 } : it);
        // [it ,it, new, it]
        setCart(newCart)
    }
    return (
        <div className="cartin">
            <h1>장바구니</h1>
            <div className="cartinner">
                {
                    cart.map(it => <li key={it.id}>
                        {/* <div>{it.id}</div> */}
                        <div className="name">
                            <Link to={`/detail/${it.id}`}>{it.name}</Link>
                        </div>
                        <div className="price">{parseInt(Number(it.price) * sw[1]?.rate).toLocaleString()}원</div>

                        {/* {it.desc} */}
                        <div className="add">
                            <div>{it.num}</div>
                            <button onClick={() => crarModify(it.id)}><AiOutlinePlus /></button>
                        </div>

                        <img src={it.img} alt="" />
                    </li>)
                }

                <h2>
                    총
                    <div className="totalprice">
                        {
                            allPrice &&
                            parseInt(allPrice * sw[1]?.rate).toLocaleString()
                        }
                    </div>
                    원
                </h2>

                <button className="order">주문하기</button>
            </div>
        </div>
    )
}

export default Cart;