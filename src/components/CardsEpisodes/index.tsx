import CustomIcon from "../CustomIcon";
import ButtonLeanMore from "../ButtonLearnMore";

import styles from "./style.module.sass";

interface CardProps {
  episodeName: string;
}

const CardsEpisodes: React.FC<CardProps> = ({ episodeName }) => {
  return (
    <div className={styles.episodesCards}>
      <h3 className={styles.nameEpisodes}>
        <CustomIcon icon="PiTelevisionBold" size="18" color="#fff" />
        {episodeName}
      </h3>
      <ButtonLeanMore />
    </div>
  );
};

export default CardsEpisodes;
