import { useState } from "react";
/*
import MostraNome from "./components/MostraNome"
function App() {
  const [pessoa, setPessoa] = useState("Professor de TI")
  function handleChangeName(nome){
    setPessoa(nome)
  }
  function returnName(nome){
    setPessoa(nome)
  }
  return (
    <div className = 'container container-light bg-light d-flex justify-content-between' classNameName="App">
      <h1 className='h1'>Meu primeiro App</h1>
      <h2>{pessoa}</h2>
      <MostraNome pessoa="Allan" idade={178}/>
      <button className='btn btn-primary' onClick={() =>handleChangeName("Thalia")}>
        Mudar nome
      </button>
      <button className='btn btn-primary' onClick={() => returnName("Professor de TI")}>
        Voltar nome
      </button>

    </div>
  );
}

export default App;
*/
/*
function MeuForms(){
const[nome,setNome] = useState(" ");
const handleChange = (event) => {
  setNome(event.target.value)
};
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Olá ${nome}`)
}
return(
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChange} className="form-control" />
      </label>
      <input type="submit" value="Enviar" className="btn btn-primary" />
    </form>
  </div>
)
}
export default MeuForms;
*/
function App(){
  const [input, setInput] = useState(" ");
  const[tarefas, setTarefas] = useState([
      "Pagar as Contas",
      "Estudar React JS",
    ]);
  function handleRegister(e){
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput(" ");
  }
  return(
    <div className="container container-light bg-light d-flex justify-content-between">
      <h1 className="h1">Meu primeiro App</h1>
      <form onSubmit={handleRegister}>
        <input
         type="text" value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </form>
      <ul className="list-group">
  {tarefas.map((tarefa,index) => (
    <li className="list-group-item bg-primary text-light" key={index}>{tarefa}</li>
  ))}
</ul>
    </div>
  );
}
export default App