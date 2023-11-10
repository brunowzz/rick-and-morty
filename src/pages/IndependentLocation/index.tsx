import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import InfoComponent from "../../components/InfoComponent";

interface Residents {
  residents: string;
  length: number;
}

interface LocationInterface {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Residents;
}

const IndependentEpisode = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState([]);

  const handleEpisode = async () => {
    let result: any = [];

    const data = await api.get(`/location/${id}`);
    const values = data.data;

    result.push(...[values]);

    setEpisode(result);
  };

  console.log(episode);

  useEffect(() => {
    handleEpisode();
  }, []);

  return (
    <>
      {episode.map((item: LocationInterface) => (
        <InfoComponent
          key={item.id}
          name={item.name}
          date={item.type}
          episode={item.dimension}
          numberPersonage={item.residents.length}
          text="Personagens localizados aqui"
          firstIcon="PiTelevisionBold"
          secondIcon="PiCalendarBold"
          thirdIcon="MdPlaylistPlay"
        />
      ))}
    </>
  );
};

export default IndependentEpisode;
