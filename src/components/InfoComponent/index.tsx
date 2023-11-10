import CustomIcon from "../CustomIcon";

import styles from "./style.module.sass";

interface InfoInterface {
  name: string;
  date: string;
  episode: string;
  numberPersonage: number;
  text: string;
  firstIcon: string;
  secondIcon: string;
  thirdIcon: string;
}

const InfoComponent: React.FC<InfoInterface> = ({
  name,
  date,
  episode,
  numberPersonage,
  text,
  firstIcon,
  secondIcon,
  thirdIcon,
}) => {
  return (
    <main className={styles.main}>
      <CustomIcon icon={firstIcon} size="48" color="#fff" />
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.boxInfos}>
        <p className={styles.textInfo}>
          <CustomIcon icon={secondIcon} size="22" color="#fff" />
          {date}
        </p>

        <p className={styles.textInfo}>
          <CustomIcon icon={thirdIcon} size="22" color="#fff" />
          {episode}
        </p>
      </span>

      <h2 className={styles.textInfo}>
        <CustomIcon icon="MdOutlineEmojiPeople" size="22" color="#fff" />
        {numberPersonage} {text}
      </h2>
    </main>
  );
};

export default InfoComponent;
