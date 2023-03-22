import { Link, useSearchParams } from "react-router-dom"

const SearchResult = ({ shopData }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get('s');

    const searchList = shopData.filter(it => it.name.toUpperCase().includes(r.toUpperCase()))

    console.log(search, searchList);
    return (
        <ul className="list">SearchResult {


            searchList.map(it => {
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
                                {it.description.substr(0, 100)} {it.description.length > 100 ? '...' : ''}
                            </p>
                        </Link>
                    </li>
                )
            })


        }</ul>
    )
}

export default SearchResult