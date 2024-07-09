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
    <main className="container mx-auto flex justify-around my-6">
      <div className=" max-w-sm bg-white border rounded-lg shadow-xl">

        <div className="p-5 flex flex-col items-center">
        <img
          className="rounded-t-lg"
          src={pokemon?.sprites?.other?.dream_world.front_default}
          alt=""
        />
          <h1 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pokemon.name}
          </h1>
          <div className="flex gap-x-2">
          {pokemon.types?.map(item => (
            <p className={`${item.type.name} px-2 py-1 rounded-full  mb-3 font-normal text-white dark:text-white`}>
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
