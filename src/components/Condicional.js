import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail("")
    }

    return(
        <>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type='email' placeholder='Insira seu e-mail aqui' onChange= {(e) => setEmail(e.target.value)}/>
            </form>
            <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
            {userEmail &&(
                <div>
                    O e-mail do usuário é: {userEmail}
                    <button type='submit' onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}

        </>
    )

}

export default Condicional