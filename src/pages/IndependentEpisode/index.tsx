import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import InfoComponent from "../../components/InfoComponent";

interface Characters {
  characters: string;
  length: number;
}

interface EpisodeInterface {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Characters;
}

const IndependentEpisode = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState([]);

  const handleEpisode = async () => {
    let result: any = [];

    const data = await api.get(`/episode/${id}`);
    const values = data.data;

    result.push(...[values]);

    setEpisode(result);
  };

  useEffect(() => {
    handleEpisode();
  }, []);

  return (
    <>
      {episode.map((item: EpisodeInterface) => (
        <InfoComponent
          key={item.id}
          name={item.name}
          date={item.air_date}
          episode={item.episode}
          numberPersonage={item.characters.length}
          text="Personagens participaram deste episódio"
          firstIcon="PiTelevisionBold"
          secondIcon="PiCalendarBold"
          thirdIcon="MdPlaylistPlay"
        />
      ))}
    </>
  );
};

export default IndependentEpisode;
