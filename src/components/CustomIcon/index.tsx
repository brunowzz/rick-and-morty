import { IconContext } from "react-icons";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { BiLike, BiSolidLike, BiPlanet } from "react-icons/bi";
import {
  MdOutlineInsertEmoticon,
  MdOutlineLocalHospital,
  MdOutlineSearch,
} from "react-icons/md";
import { PiTelevisionBold, PiSkullBold, PiInfo } from "react-icons/pi";

interface CustomIconInterface {
  icon: string;
  color: string;
  size: string;
}

const CustomIcon: React.FC<CustomIconInterface> = ({ icon, color, size }) => {
  const iconMapping: any = {
    AiOutlineVerticalAlignTop,
    BiLike,
    BiSolidLike,
    BiPlanet,
    MdOutlineInsertEmoticon,
    MdOutlineLocalHospital,
    MdOutlineSearch,
    PiTelevisionBold,
    PiSkullBold,
    PiInfo,
  };

  const IconComponent: string = iconMapping[icon];

  return (
    <IconContext.Provider value={{ color, size }}>
      <IconComponent />
    </IconContext.Provider>
  );
};

export default CustomIcon;
