import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const Navigation = () => {
    const numero = useContext(PokemonContext)
    console.log(numero)
  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>
        <form>
          <div>
            <input
              type="search"
              name="valueSearch"
              id=""
              placeholder="Buscar nombre de pokemon"
            />
          </div>
          <button className="btn-search">Buscar</button>{" "}
        </form>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
