import Logo from "../../assets/logo.png";

import styles from "./style.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <figure>
        <img src={Logo} alt="logo" className={styles.logo} />
      </figure>
    </header>
  );
};

export default Header;
