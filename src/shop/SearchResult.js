import { Link, useSearchParams } from "react-router-dom";

const SearchResult = ({ shopData, sw }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get('q');

    //{shopData} 에서 {name}에 r포함된 거를 찾아서 새배열을 만들기... 

    const searchResult = shopData.filter(it => it.name.toUpperCase().includes(r.toUpperCase()) || it.description?.toUpperCase().includes(r.toUpperCase()));


    // 설명 부분에 키워드가 포함된 것도 찾아주게...;

    return (
        <div className="searchresult">
            <h1>
                {
                    searchResult.length === 0
                        ? <div>제품이 없습니다.<br />(영어로 작성해주셔야 검색이 가능합니다.)</div>
                        : <div>{searchResult.length} 개의 상품이 있습니다.</div>
                }
            </h1>
            <ul className="list">
                {
                    searchResult.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure>
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <strong>
                                        {it.name}
                                    </strong>
                                    <span className="price">
                                        {parseInt(it.price * sw).toLocaleString()} <span>원</span>
                                    </span>
                                    {/* <p>
                                        {it.description?.substr(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                    </p> */}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchResult;