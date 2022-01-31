import {createContext, useState, useContext} from "react";

const AppContext = createContext();

export function AppWrapper({children}) {
  const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);
  const [pokemonsData, setPokemonsData] = useState([]);

  const sharedState = {
    numberOfPokemonsToFetch,
    setNumberOfPokemonsToFetch,
    pokemonsData,
    setPokemonsData,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

//import {createContext, useState} from "react";
//import arrowDown from "../../Assets/angle-arrow-down.png";

// export const ContextList = createContext();

// export const ContextProvider = ({children}) => {
//   const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);
//   const [pokemonsData, setPokemonsData] = useState([]);

// const [searching, IsSearching] = useState(false);
// const [searchTerm, setSearchTerm] = useState("");
// const [filteredPokemon, setFilteredPokemon] = useState([]);
// const [pokemons, setPokemons] = useState([]);
// const [id, setId] = useState(null);
// const [pokemon, setPokemon] = useState(null);
// const [detail, setDetail] = useState([]);
// const [loading, setLoading] = useState(false);
// const [pokemonsData, setPokemonsData] = useState([]);
// const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);
// const [isHigherNumber, setIsHigherNumber] = useState(0);
// const [titleImagesDetail, setTitleImagesDetail] = useState([]);
// const [imageUrlsDetail, setImageUrlsDetail] = useState([]);
// const [isActive, setIsActive] = useState(false);
// const [arrow, setArrow] = useState(arrowDown);
// const [isModalVisible, setIsModalVisible] = useState(false);
// const [abilityURL, setAbilityURL] = useState([]);
// const [abilityGer, setAbilityGer] = useState([]);

// const values = {
//   numberOfPokemonsToFetch,
//   setNumberOfPokemonsToFetch,
//   pokemonsData,
//   setPokemonsData,

// isActive,
// setIsActive,
// isModalVisible,
// setIsModalVisible,
// arrow,
// setArrow,
// searching,
// IsSearching,
// searchTerm,
// setSearchTerm,
// filteredPokemon,
// setFilteredPokemon,
// pokemons,
// setPokemons,
// id,
// setId,
// pokemon,
// setPokemon,
// detail,
// setDetail,
// loading,
// setLoading,
// pokemonsData,
// setPokemonsData,
// numberOfPokemonsToFetch,
// setNumberOfPokemonsToFetch,
// isHigherNumber,
// setIsHigherNumber,
// titleImagesDetail,
// setTitleImagesDetail,
// imageUrlsDetail,
// setImageUrlsDetail,
// abilityURL,
// setAbilityURL,
// abilityGer,
// setAbilityGer,
//   };

//   return <ContextList.Provider value={values}>{children}</ContextList.Provider>;
// };
