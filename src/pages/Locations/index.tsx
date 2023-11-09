import { useState, useEffect } from "react";

import api from "../../services/api";
import CardsLocations from "../../components/CardsLocation";

import styles from "./style.module.sass";

interface CardsLocationInterface {
  id: number;
  name: string;
  nameLocation: string;
}

const Locations = () => {
  const [location, setlocation] = useState([]);

  const handleLocations = async () => {
    const pages = [1, 2, 3];
    const data: any = [];

    for (let page of pages) {
      const response: any = await api.get(`/location/?page=${page}`);

      data.push(...response.data.results);
    }

    setlocation(data);
  };

  useEffect(() => {
    handleLocations();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todos as localizações</h1>

      <section className={styles.container}>
        {location &&
          location.map((item: CardsLocationInterface) => (
            <CardsLocations
              key={item.id}
              typeLocation={item.name}
              nameLocation={item.name}
            />
          ))}
      </section>
    </main>
  );
};

export default Locations;
