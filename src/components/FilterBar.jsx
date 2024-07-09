import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const FilterBar = () => {
  const { active, handleCheckbox, setActive } = useContext(PokemonContext);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <>
      <div
        className={`container-filters ${
			active ? "active" : ""
        } overflow-y-scroll scrollbar`}
      >
        <div className="filter-by-type p-2 w-full">
          <div className="flex justify-between w-full">
            <span>Tipo</span>

            <button onClick={handleToggle}>
              {active ? "Cerrar" : "Abrir"} Filtros
            </button>
          </div>

          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="grass"
              id="grass"
            />
            <label htmlFor="grass">Planta</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="fire"
              id="fire"
            />
            <label htmlFor="fire">Fuego</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="bug"
              id="bug"
            />
            <label htmlFor="bug">Bicho</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="fairy"
              id="fairy"
            />
            <label htmlFor="fairy">Hada</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="dragon"
              id="dragon"
            />
            <label htmlFor="dragon">Dragón</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="shadow"
              id="shadow"
            />
            <label htmlFor="shadow">Fantasma</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="ground"
              id="ground"
            />
            <label htmlFor="ground">Tierra</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="normal"
              id="normal"
            />
            <label htmlFor="normal">Normal</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="psychic"
              id="psychic"
            />
            <label htmlFor="psychic">Psíquico</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="steel"
              id="steel"
            />
            <label htmlFor="steel">Acero</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="dark"
              id="dark"
            />
            <label htmlFor="dark">Siniestro</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="electric"
              id="electric"
            />
            <label htmlFor="electric">Eléctrico</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="fighting"
              id="fighting"
            />
            <label htmlFor="fighting">Lucha</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="flying"
              id="flying"
            />
            <label htmlFor="flying">Volador</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="ice"
              id="ice"
            />
            <label htmlFor="ice">Hielo</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="poison"
              id="poison"
            />
            <label htmlFor="poison">Veneno</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="rock"
              id="rock"
            />
            <label htmlFor="rock">Roca</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="water"
              id="water"
            />
            <label htmlFor="water">Agua</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
