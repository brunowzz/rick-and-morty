import { useState, useEffect } from "react";

import RickAndMorty from "../../assets/rick-and-morty.png";

import api from "../../services/api";
import FilterButton from "../../components/FilterButton";
import Subtitles from "../../components/Subtitles";
import CardsPersonages from "../../components/CardsPersonages";
import CardsEpisodes from "../../components/CardsEpisodes";
import CardsLocation from "../../components/CardsLocation";

import styles from "./style.module.sass";

interface OriginInterface {
  name: string;
}
interface PersonageInterface {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  origin: OriginInterface;
}

interface EpisodeInterface {
  id: number;
  name: string;
}

interface LocationInterface {
  id: number;
  type: string;
  name: string;
}

const Home = () => {
  const [personage, setPersonage] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [location, setLocation] = useState([]);

  const handlePersonage = async () => {
    const { data } = await api.get("/character");
    const results = data.results;

    setPersonage(results.slice(0, 8));
  };

  const handleEpisode = async () => {
    const { data } = await api.get("/episode");
    const results: [] = data.results;

    setEpisodes(results.slice(0, 5));
  };

  const handleLocation = async () => {
    const { data } = await api.get("/location");
    const results: [] = data.results;

    setLocation(results.slice(0, 7));
  };

  useEffect(() => {
    handlePersonage();
    handleEpisode();
    handleLocation();
  }, []);

  return (
    <>
      <article className={styles.principalContent}>
        <div className={styles.principalContentText}>
          <span>
            <h1 className={styles.title}>
              Saiba tudo em um só <strong>lugar.</strong>
            </h1>
            <h2 className={styles.subtitleInfo}>
              Personagens. localizações, episódios e muito mais.
            </h2>
          </span>

          <p className={styles.paragraph}>Ai sim!</p>
        </div>

        <figure>
          <img
            src={RickAndMorty}
            alt="Rick And Morty"
            className={styles.rickAndMorty}
          />
        </figure>
      </article>

      <section className={styles.containerItens}>
        <div className={styles.boxFilterElements}>
          <input
            type="text"
            placeholder="Personagem, episódio, localização..."
          />

          <span className={styles.filterElements}>
            <p className={styles.filterText}>Filtrar por:</p>

            <FilterButton
              iconName="MdOutlineInsertEmoticon"
              text="Personagens"
            />

            <FilterButton iconName="BiPlanet" text="Localizações" />

            <FilterButton iconName="PiTelevisionBold" text="Episódios" />
          </span>
        </div>

        <Subtitles text="Personagens" url="/characters" />

        <section className={styles.containerCards}>
          {personage &&
            personage.map((item: PersonageInterface) => (
              <CardsPersonages
                key={item.id}
                image={item.image}
                personageName={item.name}
                personageStatus={item.status}
                personageSpecie={item.species}
                personageOrigin={item.origin.name}
              />
            ))}
        </section>

        <Subtitles text="Episódios" url="/episodes" />

        <section className={styles.containerEpisodes}>
          {episodes &&
            episodes.map((item: EpisodeInterface) => (
              <CardsEpisodes key={item.id} episodeName={item.name} />
            ))}
        </section>

        <Subtitles text="Localizações" url="/locations" />

        <section className={styles.containerEpisodes}>
          {location &&
            location.map((item: LocationInterface) => (
              <CardsLocation
                key={item.id}
                typeLocation={item.type}
                nameLocation={item.name}
              />
            ))}
        </section>
      </section>
    </>
  );
};

export default Home;
