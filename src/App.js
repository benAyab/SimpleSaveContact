import { Link } from "react-router-dom";
import './globalStyle.css';

function App() {
  return (
    <div className="container is-fluid">
      <li className="box">
        <Link to="/nom">Ajouter un nom et prenom</Link>
      </li>
      <li className="box">
        <Link to="/telephone">Enregistrer un numéro de telephone</Link>
      </li>
    </div>
  );
}

export default App;
