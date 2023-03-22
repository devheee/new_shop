import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopData, cart, setCart }) => {
    const { itm } = useParams();
    //itm === shopData.id;
    const Itm = shopData.find(it => String(it.id) === itm);
    const GO = useNavigate();

    const addCart = () => {
        // cart page 로 이동해라...
        // cart 배열에다가 여기 아이템을 담고...
        setCart([
            ...cart,
            {
                id: Itm.id,
                name: Itm.name,
                price: Itm.price,
                desc: Itm.description,
                img: Itm.api_featured_image,
                num: 1
            }
        ])
        GO('/cart');
    }


    return (
        <div className="itm--">
            {
                Itm && //객체검정... ?
                <>
                    <figure>
                        <img src={Itm.api_featured_image} alt="" />
                    </figure>
                    <strong>
                        {Itm.name}
                    </strong>
                    <p>
                        {Itm.description?.substr(0, 100)} {Itm.description?.length > 100 ? '...' : ''}
                    </p>

                    <button onClick={addCart}>Add Cart</button>
                </>
            }
        </div>


    )
}

export default Itm;