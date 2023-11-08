import Logo from "../../assets/logo.png";

import CustomIcon from "../CustomIcon";

import styles from "./style.module.sass";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section className={styles.sectionLinks}>
        <figure>
          <img src={Logo} alt="rick and morty" />
        </figure>

        <nav>
          <a onClick={() => scrollTo(0, 0)}>
            <CustomIcon
              icon="AiOutlineVerticalAlignTop"
              size="22"
              color="#fff"
            />
          </a>
        </nav>
      </section>

      <div className={styles.containerYear}>
        <p>® {year}</p>
        <p>
          Desenvolvido por <strong>Bruno Barreiras</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
