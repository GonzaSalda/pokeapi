import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id);
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="container mx-auto">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src={pokemon?.sprites?.other?.dream_world.front_default}
          alt=""
        />
        <div className="p-5">
          <h1 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pokemon.name}
          </h1>
          <div className="flex gap-x-2 uppercase text-sm tracking-tighter">
          {pokemon.types?.map(item => (
            <p className={`${item.type.name}  mb-3 font-normal text-gray-700 dark:text-gray-400`}>
              {item.type.name}
            </p>
          ))}
          </div>
        
        </div>
      </div>
    </main>
  );
};

export default PokemonPage;
