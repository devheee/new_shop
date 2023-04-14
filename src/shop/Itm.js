import { Navigate, useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopData, cart, setCart, sw }) => {
    const { itm } = useParams();
    //itm === shopData.id;
    const Itm = shopData.find(it => String(it.id) === itm);

    const navigate = useNavigate();

    const addCart = () => {
        // cart page 로 이동해라...
        // cart 배열에다가 여기 아이템을 담고...
        const match = cart.find(it => it.id == Itm.id)
        console.log(match)
        let option;
        if (match) {
            alert('같은 제품이 장바구니에 있습니다.')
            option = cart.map(it => it.id === match.id ? { ...it, num: it.num + 1 } : it);
        } else {
            option = [
                ...cart,
                {
                    id: Itm.id,
                    name: Itm.name,
                    price: Itm.price,
                    desc: Itm.description,
                    img: Itm.api_featured_image,
                    num: 1
                }
            ]
        }
        setCart(option)
        navigate('/cart');
    }


    return (
        <div className="productpage">
            {
                Itm && //객체검정... ?
                <div className="product_">
                    <figure>
                        <img src={Itm.api_featured_image} alt="" />
                    </figure>
                    <div className="desc">
                        <strong>
                            {Itm.name}
                        </strong>
                        <ul className="color">
                            {
                                Itm.product_colors?.map((it, idx) => <li key={idx} style={{
                                    background: it.hex_value,
                                    display: "inline-block",
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    margin: "0 2px"
                                }}></li>)
                            }
                        </ul>
                        <p>
                            {Itm.description}
                        </p>
                        <div className="itmPrice">
                            <span className="price">{parseInt(Itm.price * sw).toLocaleString()}</span> <span>원</span>
                        </div>
                        <div className="btn">
                            <button onClick={addCart}>장바구니</button>
                            <button>구매하기</button>
                        </div>

                    </div>
                </div>
            }
        </div>


    )
}

export default Itm;