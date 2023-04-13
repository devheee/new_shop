import { useEffect, useState } from "react";
import { gsap } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";


const Btn = styled.div`
    position: fixed;
    bottom: 100px;
    right:100px;
    color: #fff;
    background: #444;
    font-size: 30px;
    padding: 10px 12px;
    border-radius: 50%;
    visibility:hidden;
    opacity:0;
    cursor: pointer;
    transition: 0.5s;
    z-index: 9999;
    
    &.on {
        visibility:visible;
        opacity:1;
    }
`

const ToTop = () => {
    const [scrollY, setScrollY] = useState(0);
    const totopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }

    const scrllEvent = () => {
        let scy = window.scrollY;
        setScrollY(scy)
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrllEvent);
        return () => {
            window.removeEventListener('scroll', scrllEvent);
        }
    }, []);


    return (
        <Btn onClick={totopHandler} className={scrollY > 400 && 'on'}>
            <FiArrowUp />
        </Btn>
    )
}

export default ToTop