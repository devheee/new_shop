import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');

    const searchHandler = e => {
        e.preventDefault();
        setSearch(input);
        navigate(`/search/?q=${input}`)
    }

    const inputHandler = e => {
        const { value } = e.target;
        console.log(value);
        setInput(value)
    }

    return (
        <div>
            <form onSubmit={searchHandler}>
                <input type="text" onChange={inputHandler} />
                <button>SEARCH</button>
            </form>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate('/')}>홈으로가기</button>
            {
                search
            }
        </div>
    )
}

export default Search;