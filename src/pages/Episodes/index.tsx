import { useState, useEffect } from "react";

import api from "../../services/api";
import CardsEpisodes from "../../components/CardsEpisodes";

import styles from "./style.module.sass";

interface EpisodeInterface {
  id: number;
  name: string;
}

const Episodes = () => {
  const [episode, setEpisode] = useState([]);

  const handleEpisodes = async () => {
    const pages = [1, 2, 3];
    const data: any = [];

    for (let page of pages) {
      const response = await api.get(`/episode/?page=${page}`);

      data.push(...response.data.results);
    }

    setEpisode(data);
  };

  useEffect(() => {
    handleEpisodes();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todos os episódios</h1>

      <section className={styles.container}>
        {episode &&
          episode.map((item: EpisodeInterface) => (
            <CardsEpisodes key={item.id} episodeName={item.name} />
          ))}
      </section>
    </main>
  );
};

export default Episodes;
