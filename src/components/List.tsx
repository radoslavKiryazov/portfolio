import ListItem from "./ListItem";
import useListNavigation from "../hooks/useListNavigation";
import { Link } from "react-router-dom";

interface ListProps {
  items: string[];
}

const List = (props: ListProps) => {
  const { focusedIndex, handleKeyDown, listItemRefs } = useListNavigation();

  return (
    <ul>
      {props.items.map((item, index) => (
        <Link
          onKeyDown={(event) => handleKeyDown(event, index)}
          tabIndex={index === focusedIndex ? 0 : -1}
          key={index}
          to={"/Projects"}
        >
          <ListItem
            title={item}
            ref={(item) => item && (listItemRefs.current[index] = item)}
          />
        </Link>
      ))}
    </ul>
  );
};
export default List;
