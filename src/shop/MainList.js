import { Link } from "react-router-dom";

const MainList = ({ shopData, sw, cate }) => {

    // 카테고리가 포함된 새배열 map, filter, concat;
    // arry1 + arry2 : arry1.concat(arry2);
    // [...arry1, ...arry2]

    const list = shopData.filter(it => it.category === cate);
    return (
        <div className="MainList inner">
            <div className="MainTitle">
                <h2>{cate}</h2>
            </div>
            <ul className="list _lg">
                {
                    list.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <strong className="itmTitle">
                                        {it.name}
                                    </strong>
                                    <p className="itmDesc">
                                        {it.description?.substr(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                    </p>
                                    <div className="itmPrice">
                                        <span>{parseInt(it.price * sw).toLocaleString()}</span> 원
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MainList;