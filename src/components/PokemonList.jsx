import React from "react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "./CardPokemon";

const PokemonList = () => {
  const { allPokemons,filteredPokemons,onClickLoadMore} = useContext(PokemonContext);
  return (
    <>
      <div className="container  grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {
        filteredPokemons.length ? (
          <>
          {filteredPokemons.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
            
          ))}
          </>
        ):(
          <>
          {allPokemons.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
          </>
        )}
      <div className="col-span-3 flex justify-center mt-8">
                <button className='btn-load-more' onClick={onClickLoadMore}>
                    Cargar más
                </button>
            </div>
      </div>
    </>
  );
};

export default PokemonList;
