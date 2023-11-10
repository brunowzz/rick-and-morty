import { useState, useEffect } from "react";

import api from "../../services/api";
import CardsLocations from "../../components/CardsLocation";

import styles from "./style.module.sass";

interface CardsLocationInterface {
  id: number;
  name: string;
  type: string;
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

    console.log(data);

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
              id={item.id}
              typeLocation={item.type}
              nameLocation={item.name}
              iconName="BiPlanet"
            />
          ))}
      </section>
    </main>
  );
};

export default Locations;
