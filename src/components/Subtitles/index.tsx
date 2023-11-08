import { Link } from "react-router-dom";
import styles from "./style.module.sass";

interface SubtitleProps {
  text: string;
  url: string;
}

const Subtitles: React.FC<SubtitleProps> = ({ text, url }) => {
  return (
    <span className={styles.containerTitle}>
      <h2 className={styles.subtitle}>{text}</h2>

      <Link to={url}>
        <button className={styles.viewAll}> Ver todos </button>
      </Link>
    </span>
  );
};

export default Subtitles;
