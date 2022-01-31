import React, {useContext, useEffect} from "react";
//import {useNavigate} from "react-router-dom";
import Image from 'next/image'

import {ContextList} from "../ContextProvider";
// import {
//   TypeTitle,
//   NameTitle,
//   ImagePokemon,
//   CardPokemon,
//   Tables,
// } from "./Card.styles";

const Card = ({pokemon}) => {
  const context = useContext(ContextList);
  //const pokemon = context.pokemon;

  const navigate = useNavigate();
  const handleClick = () => {
    context.setId(pokemon.id);
    navigate(`/Pokemonlist/Detail/${pokemon.id}/${pokemon.name}`);
  };

  //console.log(context.PokemonsData);

  const {sprites, name, types} = pokemon;
  return (

        <div onClick={handleClick}>
      <div>
        <Image src={sprites.front_default} alt="img" />
      </div>
      <p>{name}</p>
      <p>name</p>
      <p> {types[0].type.name} </p>
      <p>type</p>
    </div>


    // <CardPokemon onClick={handleClick}>
    //   <ImagePokemon>
    //     <img src={sprites.front_default} alt="img" />
    //   </ImagePokemon>
    //   <NameTitle>{name}</NameTitle>
    //   <Tables>name</Tables>
    //   <TypeTitle> {types[0].type.name} </TypeTitle>
    //   <Tables>type</Tables>
    // </CardPokemon>
  );
};

export {Card};
