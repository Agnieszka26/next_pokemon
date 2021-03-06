import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingPage from "../components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Pokemon </title>
        <meta name="description" content="Pokemon app" />
      </Head>

      <LandingPage />
    </div>
  );
}
