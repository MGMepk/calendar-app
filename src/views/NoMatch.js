import { Link } from "react-router-dom";
function NoMatch() {
  return (
    <div>
      <h2>¡No hay nada aqui!</h2>
      <p>
        <Link to="/">Volver al inicio</Link>
      </p>
    </div>
  );
}

export default NoMatch;
