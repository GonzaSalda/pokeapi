import { useContext } from "react";
import { Link, useNavigate , Outlet } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const Navigation = () => {
    const  { valueSearch, onInputChange, onResetForm } = useContext(PokemonContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
      //navigate al search
      navigate(`/search`, { state: valueSearch });
      onResetForm();
    }

  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="search"
              name="valueSearch"
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar nombre de pokemon"
            />
          </div>
          <button type="submit" className="btn-search">Buscar</button>{" "}
        </form>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
