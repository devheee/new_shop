import { useEffect, useRef, useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const CateList = ({ shopData, sw }) => {
    const { cate } = useParams();
    const { product } = useParams();

    const inputRef = useRef([]);
    const [lang, setLang] = useState(8);
    console.log(lang)
    const [on, setOn] = useState(false);

    // 카테고리가 포함된 새배열 map, filter, concat;
    // arry1 + arry2 : arry1.concat(arry2);
    // [...arry1, ...arry2]


    const list = shopData.filter(it => it.product_type === cate);
    const [sort, setSort] = useState(list);

    const priceDown = () => {
        setSort([...list.sort((a, b) => a.price - b.price)])
    }

    const priceUp = () => {
        setSort([...list.sort((a, b) => b.price - a.price)])
    }

    // 업데이트날짜를 숫자로 바꾸는 Date() 사용하면 됨
    const newProduct = () => {
        setSort([...list.sort((a, b) => b.id - a.id)])
    }

    // 인기를 판단할 데이터가 없어 name.length 로 진행
    const bestProduct = () => {
        setSort([...list.sort((a, b) => b.name.length - a.name.length)])
    }


    useEffect(() => {
        setSort([...list.sort((a, b) => b.name.length - a.name.length)])
    }, [product, shopData, cate])



    const infiniteScroll = e => {
        const scrollY = window.scrollY
        const visible = document.documentElement.clientHeight
        const pageHeight = document.documentElement.scrollHeight
        const bottomOfPage = (visible + scrollY + 1) >= pageHeight
        console.log(scrollY, visible, pageHeight, bottomOfPage);

        if (bottomOfPage) {
            setLang(lang + 1);
        }



        if (lang) {
            inputRef.current[lang - 1]?.classList.add('on')
        }


    }

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);
        // inputRef.current[0].classList.add('on');
        return () => {
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [lang])

    return (
        <div className="CateList inner">
            <div className="CateTitle">
                <h2>{cate}</h2>
                <ul>
                    <li onClick={priceUp}>높은가격</li>
                    <li onClick={priceDown}>낮은가격</li>
                    <li onClick={newProduct}>신상</li>
                    <li onClick={bestProduct}>인기</li>
                </ul>
            </div>
            <ul className="list _lg">
                {
                    list &&
                    sort.map((it, idx) => {
                        return (
                            <li key={it.id}
                                ref={el => inputRef.current[idx] = el}
                                className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <strong className="itmTitle">
                                        {it.name}
                                    </strong>
                                    <ul className="color">
                                        {
                                            it.product_colors.map((it, idx) =>
                                                <li key={idx} style={{
                                                    background: it.hex_value,
                                                    display: "inline-block",
                                                    width: 10,
                                                    height: 10,
                                                    borderRadius: '50%',
                                                    margin: "0 2px",
                                                }} ></li>)
                                        }
                                    </ul>
                                    {/* <p className="itmDesc">
                                        {it.description?.substr(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                    </p> */}
                                    <div className="itmPrice">
                                        <span>{parseInt(it.price * sw).toLocaleString()}</span> 원
                                    </div>
                                </Link>
                            </li>
                        )
                    }).slice(0, lang * 4)
                }
            </ul>
        </div>
    )
}

export default CateList;