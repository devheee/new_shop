import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollTop = () => {

    const { pathname } = useLocation();


    const ScrTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {

        // if (pathname === '/') ScrTop();
        if (pathname.includes('/tab')) {
            return
        }
        ScrTop();

    }, [pathname])


    return null
}

export default ScrollTop;