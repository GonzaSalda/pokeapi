import React from "react";
import { Link } from "react-router-dom";

const CardPokemon = ({ pokemon }) => {
  const maxWeight = 1500; // Define a maximum value for weight
  const maxHeight = 20; // Define a maximum value for height
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div
          className={`${pokemon.types[0].type.name} min-h-[350px] group rounded flex flex-col justify-evenly items-center`}
        >
          {/* img */}
          <div className="overflow-hidden">
            <img
              className="w-full max-h-[80px]"
              src={pokemon.sprites.other.showdown.front_default}
              alt="Shoes"
            />
          </div>
          {/* info */}
          <div className="flex flex-col gap-2 items-center">
            <h2 className="capitalize text-xl font-semibold">{pokemon.name}</h2>
            <div className="flex gap-x-2">
              <p
                className={`${pokemon.types[0].type.name} p-2 lg:p-4 rounded-full  badge badge-secondary capitalize font-semibold`}
              >
                {pokemon.types[0].type.name}
              </p>
              {pokemon.types[1] && (
                <p
                  className={`${pokemon.types[0].type.name} p-2 lg:p-4 rounded-full badge badge-secondary capitalize font-semibold`}
                >
                  {pokemon.types[1].type.name}
                </p>
              )}
            </div>
          </div>

           <div>
        <label className="text-sm font-semibold">
          Altura: 0.{pokemon.height}m
        </label>
        <progress
          className="w-full h-2 bg-white-200 rounded"
          value={pokemon.height}
          max={maxHeight}
        ></progress>
      </div>
      <div>
        <label className="text-sm font-semibold">
          Peso: {pokemon.weight}Kg
        </label>
        <progress
          className="w-full h-2 bg-white-200 rounded"
          value={pokemon.weight}
          max={maxWeight}
        ></progress>
      </div>
        </div>
      </Link>
    </>
  );
};

export default CardPokemon;
