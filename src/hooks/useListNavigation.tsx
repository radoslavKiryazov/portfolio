import { useEffect, useState, useRef, KeyboardEvent } from "react";
const useListNavigation = () => {
  const listItemRefs = useRef<HTMLDivElement[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  useEffect(() => {
    listItemRefs.current[0].focus();
  }, []);

  const updateFocus = (newIndex: number): void => {
    setFocusedIndex(newIndex);
    listItemRefs.current[newIndex].focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLLIElement>,
    index: number
  ): void => {
    if (movementKeys.down.includes(event.key.toLocaleLowerCase())) {
      const newIndex = (index + 1) % listItemRefs.current.length;
      updateFocus(newIndex);
      return;
    }

    if (movementKeys.up.includes(event.key.toLocaleLowerCase())) {
      const newIndex =
        (index - 1 + listItemRefs.current.length) % listItemRefs.current.length;
      updateFocus(newIndex);
      return;
    }
  };

  return { handleKeyDown, focusedIndex, listItemRefs };
};
export default useListNavigation;

const movementKeys = {
  down: ["arrowdown", "s"],
  up: ["arrowup", "w"],
  forwards: [],
  backwards: [],
};
