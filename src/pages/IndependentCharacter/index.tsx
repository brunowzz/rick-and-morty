import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import CustomIcon from "../../components/CustomIcon";
import CardsLocation from "../../components/CardsLocation";

import styles from "./style.module.sass";
interface EpisodeInterface {
  episode: string;
  length: number;
}

interface CardsInterface {
  origin: string;
  location: string;
  name: string;
}

interface CharacterInterface {
  id: number;
  image: string;
  name: string;
  episode: EpisodeInterface;
  status: string;
  species: string;
  gender: string;
  origin: CardsInterface;
  location: CardsInterface;
}

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  const handleCharacter = async () => {
    let result: any = [];

    const data = await api.get(`/character/${id}`);
    const values = data.data;

    result.push(...[values]);

    console.log(values.location);

    setCharacter(result);
  };

  useEffect(() => {
    handleCharacter();
  }, []);

  return (
    <main className={styles.main}>
      {character.map((item: CharacterInterface) => (
        <section key={item.id} className={styles.boxInfoPersonage}>
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className={styles.personageImage}
            />
          </figure>

          <div className={styles.containerItens}>
            <h1 className={styles.title}>{item.name}</h1>
            <h2 className={styles.subtitleInfo}>
              <CustomIcon icon="PiTelevisionBold" color="#fff" size="26" />
              Participou de <strong> {item.episode.length} </strong> episódios
            </h2>

            <span className={styles.boxStatus}>
              <p className={styles.statusPersonage}>
                <CustomIcon
                  icon="MdOutlineLocalHospital"
                  color="#fff"
                  size="22"
                />
                {item.status}
              </p>

              <p className={styles.statusPersonage}>
                <CustomIcon icon="PiSkullBold" color="#fff" size="22" />
                {item.species}
              </p>

              <p className={styles.statusPersonage}>
                <CustomIcon
                  icon="MdOutlineEmojiPeople"
                  color="#fff"
                  size="22"
                />
                {item.gender}
              </p>
            </span>

            <div className={styles.containerCards}>
              <CardsLocation
                id={item.id}
                nameLocation={item.origin.name}
                iconName="BiPlanet"
              />

              <CardsLocation
                id={item.id}
                nameLocation={item.location.name}
                iconName="MdOutlineAddLocationAlt"
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Character;
