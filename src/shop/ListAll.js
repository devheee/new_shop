const ListAll = ({ shopData }) => {
    return (
        <>
            {shopData.map(it => <li key={it.id}>{it.name}</li>)}
        </>
    )
}

export default ListAll;