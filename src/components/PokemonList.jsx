import React from "react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "./CardPokemon";

const PokemonList = () => {
  const { allPokemons, filteredPokemons, onClickLoadMore } =
    useContext(PokemonContext);
  return (
    <>
      <div className="container mx-auto lg:px-0">
        <div className="max-w-sm mx-auto lg:max-w-none lg:mx-0 grid grid-cols-2  gap-4 lg:grid-cols-3 lg:gap-12">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
          <div className="col-span-2 lg:col-span-3 flex justify-center m-6">
            <button className="btn-load-more" onClick={onClickLoadMore}>
              Cargar más
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
