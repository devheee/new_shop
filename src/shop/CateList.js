import { Link, useParams } from "react-router-dom";

const CateList = ({ shopData }) => {
    const { cate } = useParams();

    // 카테고리가 포함된 새배열 map, filter, concat;
    // arry1 + arry2 : arry1.concat(arry2);
    // [...arry1, ...arry2]

    const list = shopData.filter(it => it.category === cate);
    return (
        <ul className="list">
            {
                list.map(it => {
                    return (
                        <li key={it.id} className="itm">
                            <Link to={`/detail/${it.id}`}>
                                <figure>
                                    <img src={it.api_featured_image} alt="" />
                                </figure>
                                <strong>
                                    {it.name}
                                </strong>
                                <p>
                                    {it.description?.substr(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                </p>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CateList;