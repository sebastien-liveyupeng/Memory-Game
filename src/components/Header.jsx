import { Link } from "react-router-dom";

function Header({ title = "Jeu de mémoire" }) {
  return (
    <header>
      <img style={{ width: "300px" }} src="src/assets/img/logo-pokememory.png" alt="Logo Pokememory" />
    </header>
  );
}

export default Header;
