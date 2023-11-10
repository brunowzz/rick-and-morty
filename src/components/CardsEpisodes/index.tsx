import { Link } from "react-router-dom";

import CustomIcon from "../CustomIcon";
import ButtonLeanMore from "../ButtonLearnMore";

import styles from "./style.module.sass";

interface CardProps {
  episodeName: string;
  id: number;
}

const CardsEpisodes: React.FC<CardProps> = ({ episodeName, id }) => {
  return (
    <div className={styles.episodesCards}>
      <h3 className={styles.nameEpisodes}>
        <CustomIcon icon="PiTelevisionBold" size="18" color="#fff" />
        {episodeName}
      </h3>

      <Link to={`/episodes/${id}`}>
        <ButtonLeanMore />
      </Link>
    </div>
  );
};

export default CardsEpisodes;
