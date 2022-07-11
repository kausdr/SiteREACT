import Button from './Button.js'

function Evento(){

    function meuEvento(){
        console.log("Fui CLICADO!")
    }

    function meuSegundoEvento(){
        console.log("CLIQUEI NO 2o EVENTO")
    }

    return(
        <>
        <p>Clique para disparar um evento</p>
        <Button event={meuEvento} text="Primeiro evento"/>
        <Button event={meuSegundoEvento} text="Segundo evento"/>
        <button onClick={meuEvento}>CLIQUE</button>
        </>
    )
}

export default Evento