import { useContext } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const Navigation = () => {
  const { valueSearch, onInputChange, onResetForm } =
    useContext(PokemonContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search`, { state: valueSearch });
    onResetForm();
  };

  return (
    <>
      <header className="container flex flex-col gap-y-4">
        <Link to="/" className="logo">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="outline-none border-none bg-gray-100 p-2 rounded-lg md:w-96"
              type="search"
              name="valueSearch"
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar nombre de pokemon"
            />
          </div>
          <button type="submit" className="btn-search">
            Buscar
          </button>
        </form>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
