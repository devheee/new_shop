import { Link } from 'react-router-dom';
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

import { Main } from '../data/Info';

const MainVisual = () => {

    const option = {
        arrows: false,
        autoplay: true,
        dots: true,
    }
    return (
        <Slide className='MainSlide' {...option}>
            {
                Main.map((it, idx) => {
                    return (
                        <div key={idx} className={`itm _lf itm0${idx + 1}`}>
                            <div className="slogan inner">
                                <em>{it.name}</em>
                                <span>{it.title}</span>
                                <strong>{it.desc}</strong>
                                <Link to={it.lnk}>more</Link>
                            </div>
                        </div>
                    )
                })
            }
        </Slide>
    )
}

export default MainVisual;