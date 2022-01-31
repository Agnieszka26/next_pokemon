import Head from "next/head";
import styles from "../styles/Home.module.css";

import {PokemonList} from "../components/PokemonList/PokemonList";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Pokemon </title>
        <meta name="description" content="Pokemon app" />
      </Head>

      <PokemonList />
    </div>
  );
}
