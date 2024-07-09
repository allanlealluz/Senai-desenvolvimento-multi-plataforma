import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <h1>Pagina Sobre a empresa</h1> <br/> <br/> 

      <Link to="/">Pagina Home</Link> <br/>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Sobre;
