import Item from "./Item"

function List(){
    return(
        <>
            <ul>
                <Item marca="samsung" ano_lançamento={2001}/>
                <Item marca="apple" ano_lançamento={2015}/>
                <Item />
            </ul>
        </>
    )
}

export default List