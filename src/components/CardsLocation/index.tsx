import CustomIcon from "../CustomIcon";
import ButtonLeanMore from "../ButtonLearnMore";

import styles from "./style.module.sass";

interface CardsLocationInterface {
  typeLocation: string;
  nameLocation: string;
}

const CardsLocation: React.FC<CardsLocationInterface> = ({
  typeLocation,
  nameLocation,
}) => {
  return (
    <div className={styles.cardsLocation}>
      <span className={styles.iconContainer}>
        <CustomIcon icon="BiPlanet" size="36" color="#fff" />
      </span>

      <p className={styles.typeLocation}>{typeLocation}</p>
      <h3 className={styles.nameLocation}>{nameLocation}</h3>
      <ButtonLeanMore />
    </div>
  );
};

export default CardsLocation;
