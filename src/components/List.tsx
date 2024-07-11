import ListItem from "./ListItem";
import useListNavigation from "../hooks/useListNavigation";

interface ListProps {
  items: string[];
}

const List = (props: ListProps) => {
  const { focusedIndex, handleKeyDown, listItemRefs } = useListNavigation();

  return (
    <ul>
      {props.items.map((item, index) => (
        <li
          onKeyDown={(event) => handleKeyDown(event, index)}
          tabIndex={index === focusedIndex ? 0 : -1}
          key={index}
        >
          <ListItem
            title={item}
            ref={(item) => item && (listItemRefs.current[index] = item)}
          />
        </li>
      ))}
    </ul>
  );
};
export default List;
