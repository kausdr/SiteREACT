function SeuNome(props){


    return(
        <>
        <p>Digite seu nome:</p>
        <input type='text' placeholder='Insira seu nome aqui' onChange={(e) => props.setNome(e.target.value)}/>
        </>
    )

}

export default SeuNome