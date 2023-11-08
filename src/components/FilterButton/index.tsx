import CustomIcon from "../CustomIcon";

import styles from "./style.module.sass";

interface FilterButtonProps {
  iconName: string;
  text: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ iconName, text }) => {
  return (
    <button className={styles.filterButton}>
      <CustomIcon icon={iconName} size="18" color="#fff" />
      {text}
    </button>
  );
};

export default FilterButton;
