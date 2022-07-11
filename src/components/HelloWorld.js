import Frase from './Frase'

function HelloWorld(){
    return(
        <div>
            <h1>Meu primeiro componente: Hello World</h1>
            <p>Frase importada de outro componente: <Frase/></p>
            <p>De novo o mesmo componente: <Frase/></p>
        </div>
    )
}

export default HelloWorld