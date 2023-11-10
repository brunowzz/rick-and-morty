import { useState, useEffect } from "react";

import api from "../../services/api";
// import Subtitles from "../../components/Subtitles";
import CardsPersonages from "../../components/CardsPersonages";

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

const Characters = () => {
  const [personage, setPersonage] = useState([]);

  const handlePersonage = async () => {
    const data: any = [];

    for (let i = 1; i <= 3; i++) {
      const page: any = await api.get(`/character/?page=${i}`);
      const result: any = page.data.results;

      data.push(...result);
    }

    setPersonage(data);
  };

  useEffect(() => {
    handlePersonage();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todos os personagens</h1>

      <div className={styles.container}>
        {personage &&
          personage.map((item: PersonageInterface) => (
            <CardsPersonages
              key={item.id}
              id={item.id}
              image={item.image}
              personageName={item.name}
              personageStatus={item.status}
              personageSpecie={item.species}
              personageOrigin={item.origin.name}
            />
          ))}
      </div>
    </main>
  );
};

export default Characters;
