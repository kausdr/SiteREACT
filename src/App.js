import './App.css';
import {useState} from 'react'
import SeuNome from './components/pastinhaex/SeuNome';
import Saudacao from './components/pastinhaex/Saudacao';

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
    <h1>State Lift</h1>
    <SeuNome setNome={setNome}/>
    <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
