import CustomIcon from "../CustomIcon";

import styles from "./style.module.sass";

const ButtonLeanMore = () => {
  return (
    <button className={styles.aboutButton}>
      <CustomIcon icon="PiInfo" size="18" color="#fff" />
      Saiba mais
    </button>
  );
};

export default ButtonLeanMore;
