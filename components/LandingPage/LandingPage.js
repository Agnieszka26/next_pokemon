import React, {useState, useContext} from "react";
// import {HomeStyle, Input, InputNumber} from "./Home.style";
// import {useNavigate} from "react-router-dom";
//import {HomeContext} from "../Context/HomeContextProvider";
//import {ContextList} from "../Context";
//import {maxNuberOfPokemonsToFetch} from "../../public/constants";
//import {useAppContext} from "../Context";
const LandingPage = (props) => {
  //  console.log(props);
  // const context = useContext(HomeContext);
  //const context = useContext(ContextList);
  // console.log(useAppContext);

  // const [validationFailed, setValidationFailed] = useState("");

  // const validationStyles = {
  //   validationText: {
  //     padding: 0,
  //   },
  // };

  //const navigate = useNavigate();
  const handleSubmit = () => {
    // if (context.numberOfPokemonsToFetch <= 0) {
    //   setValidationFailed(true);
    // } else if (context.numberOfPokemonsToFetch > maxNuberOfPokemonsToFetch) {
    //   // context.setIsHigherNumber(context.numberOfPokemonsToFetch);
    //   // context.setNumberOfPokemonsToFetch(maxNuberOfPokemonsToFetch);
    //   getAllPokemons();
    //   //  navigate(`/${context.numberOfPokemonsToFetch}/Pokemonlist`);
    // } else {
    //   getAllPokemons();
    //   //  navigate(`/${context.numberOfPokemonsToFetch}/Pokemonlist`);
    // }
  };

  const handleEnterPress = (e) => {
    // if (e.which === 13) {
    //   handleSubmit();
    // }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    // context.setNumberOfPokemonsToFetch(e.target.value);
    //console.log(context.numberOfPokemonsToFetch);
    // validationFailed && setValidationFailed(false);
  };

  // const getAllPokemons = async () => {
  //   // const url = `https://pokeapi.co/api/v2/pokemon?limit=${context.numberOfPokemonsToFetch}`;
  //   // context.setLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     //  context.setPokemonsData(data.results);
  //   } catch (error) {
  //     console.log("error getting all pokemons data", error);
  //   } finally {
  //     // context.setLoading(false);
  //   }
  // };

  return (
    <>
      {
        <div>
          {/* <HomeStyle> */}
          <form>
            <label>
              How many pokemons do you want to see?
              {/* <InputNumber */}
              <input
                //  validationFailed={validationFailed}
                type="number"
                placeholder="set numbers of pokemons"
                value={undefined}
                onChange={handleChange}
                onKeyPress={handleEnterPress}
              />
            </label>
            {/* {validationFailed && (
              <div style={validationStyles.validationText}>
                the number must be higher than 0
              </div>
            )} */}
            <input
              type="button"
              onClick={handleSubmit}
              value="Load pokemons!"
            />
          </form>
          {/* </HomeStyle> */}
        </div>
      }
    </>
  );
};

export default LandingPage;

export async function getStaticProps(context) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const data = await response.json();
    console.log(data);

    //  context.setPokemonsData(data.results);
  } catch (error) {
    console.log("error getting all pokemons data", error);
  } finally {
    // context.setLoading(false);
  }

  return {
    props: {data},
  };
}
