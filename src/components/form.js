import {useState} from "react"

function Form(){

    function cadastrarApelido(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("CADASTROU!")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Um pequeno form em react</h1>
            <div>
                <form onSubmit={cadastrarApelido}>
                    <div>
                        <label htmlFor="name">Apelido:</label>
                        <input type="text" id="name" name="name" placeholder="Coloque seu apelido" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div><input type="submit" value="Cadastrar"/></div>
                </form>
            </div>
        </div>
    )
}

export default Form