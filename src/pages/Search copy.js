import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState('');
    const searchSumit = e => {
        e.preventDefault();
        navigate(`/search?s=${input}`)
    }

    const inputHandler = e => {
        const { name, value } = e.target;
        setInput(value);
    }
    return (
        <div>
            <form onSubmit={searchSumit}>
                <input type="text" value={input} onChange={inputHandler} />
                {input}
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search