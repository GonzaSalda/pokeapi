import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { PokemonContext } from "./PokemonContext";

const PokemonProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  /* Custom hook form */
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  /* LLamar pokemons con limite */
  const getAllPokemons = async (limit = 9) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    console.log(data);

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  /* Llamar pokemons general */
  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setGlobalPokemons(results);
    setLoading(false);
  };

  /* LLamar pokemon por nombre */
  const getPokemonById = async (id) => {
    const baseURL = `https://pokeapi.co/api/v2/`;
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  // Filter Function + State
	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

	const [filteredPokemons, setfilteredPokemons] = useState([]);

	const handleCheckbox = e => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});

		if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setfilteredPokemons([...filteredPokemons, ...filteredResults]);
            console.log(filteredResults)
		} else {
			const filteredResults = filteredPokemons.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredPokemons([...filteredResults]);
		}
	};


    /* Btn cargar más */
    const onClickLoadMore = () =>{
        setOffset(offset + 9)
        
    }


  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        getAllPokemons,
        getPokemonById,
        handleCheckbox,
        filteredPokemons,
        setActive,
        active,
        onClickLoadMore
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
