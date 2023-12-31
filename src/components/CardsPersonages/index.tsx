import { Link } from "react-router-dom";

import CustomIcon from "../CustomIcon";
import ButtonLeanMore from "../ButtonLearnMore";

import styles from "./style.module.sass";

interface CardProps {
  id: number;
  image: string;
  personageName: string;
  personageStatus: string;
  personageSpecie: string;
  personageOrigin: string;
}

const Cards: React.FC<CardProps> = ({
  id,
  image,
  personageName,
  personageStatus,
  personageSpecie,
  personageOrigin,
}) => {
  return (
    <div className={styles.cardsPersonage}>
      <figure>
        <img
          src={image}
          alt={personageName}
          className={styles.imagePersonage}
        />
      </figure>
      <h3 className={styles.namePersonage}>{personageName}</h3>
      <p className={styles.infoPersonage}>
        <CustomIcon icon="MdOutlineLocalHospital" color="#fff" size="16" />
        {personageStatus}
      </p>
      <p className={styles.infoPersonage}>
        <CustomIcon icon="PiSkullBold" color="#fff" size="16" />
        {personageSpecie}
      </p>
      <p className={styles.infoPersonage}>
        <CustomIcon icon="BiPlanet" color="#fff" size="16" />
        {personageOrigin}
      </p>

      <span className={styles.boxButton}>
        <Link to={`/characters/${id}`}>
          <ButtonLeanMore />
        </Link>
      </span>
    </div>
  );
};

export default Cards;
