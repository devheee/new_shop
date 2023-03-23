import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollTop = () => {

    const { pathname } = useLocation();
    console.log(pathname)

    const ScrTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        ScrTop();
    }, [pathname])

    return null
}

export default ScrollTop;