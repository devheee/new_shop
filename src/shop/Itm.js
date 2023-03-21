import { useParams } from "react-router-dom"

const Itm = ({ shopData }) => {
    const { itm } = useParams();
    // itm === shopData.id;
    const Itm = shopData.find(it => String(it.id) === itm)
    return (
        <>
            {
                Itm &&
                <figure className="itm">
                    Itm : {Itm.name}
                </figure>
            }
        </>

    )
}

export default Itm