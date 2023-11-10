import { Link } from "react-router-dom";

import CustomIcon from "../CustomIcon";
import ButtonLeanMore from "../ButtonLearnMore";

import styles from "./style.module.sass";

interface CardsLocationInterface {
  id: number;
  typeLocation?: string;
  nameLocation?: string;
  iconName: string;
}

const CardsLocation: React.FC<CardsLocationInterface> = ({
  id,
  typeLocation,
  nameLocation,
  iconName,
}) => {
  return (
    <div className={styles.cardsLocation}>
      <span className={styles.iconContainer}>
        <CustomIcon icon={iconName} size="36" color="#fff" />
      </span>

      <p className={styles.typeLocation}>{typeLocation}</p>
      <h3 className={styles.nameLocation}>{nameLocation}</h3>

      <Link to={`/locations/${id}`}>
        <ButtonLeanMore />
      </Link>
    </div>
  );
};

export default CardsLocation;
