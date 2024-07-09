import React from 'react'
import { Link } from 'react-router-dom'

const CardPokemon = ({pokemon}) => {
  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className={`${pokemon.types[0].type.name} min-h-[250px] rounded flex flex-col justify-evenly items-center`}>
          <img
            className="max-w-[80px]"
            src={pokemon.sprites.other.showdown.front_default}
            alt="Shoes"
          />
          <div className="flex flex-col gap-2 items-center">
            <h2 className="capitalize text-xl font-semibold">{pokemon.name}</h2>
            <div className="flex gap-x-2">
            <p className={`${pokemon.types[0].type.name} p-4 rounded-full  badge badge-secondary capitalize font-semibold`}>
              {pokemon.types[0].type.name}
            </p>
            {pokemon.types[1] && (
              <p className={`${pokemon.types[0].type.name} p-4 rounded-full badge badge-secondary capitalize font-semibold`}>
                {pokemon.types[1].type.name}
              </p>
                       )}
            </div>

   
          </div>
          <div className="flex gap-x-2 items-center">
            <p className="text-sm font-semibold">{pokemon.weight}KG</p>
            <p className="text-sm font-semibold">0.{pokemon.height}m</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardPokemon