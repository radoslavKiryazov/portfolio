import { useEffect } from "react";
const useTitleRoulette = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 50);
      document.title = titles[randomIndex];
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};
export default useTitleRoulette;

const titles = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "vanilla",
  "watermelon",
  "xigua",
  "yam",
  "zucchini",
  "apricot",
  "blueberry",
  "cantaloupe",
  "dragonfruit",
  "elderflower",
  "fig",
  "grapefruit",
  "honeyberry",
  "imbe",
  "jackfruit",
  "kumquat",
  "lime",
  "mulberry",
  "nectarine",
  "olive",
  "passionfruit",
  "quararibea",
  "rambutan",
  "salak",
  "tomato",
  "ugli",
  "velvet apple",
  "wolfberry",
  "ximenia",
  "yuzu",
  "ziziphus",
];
