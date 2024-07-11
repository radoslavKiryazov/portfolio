import { useEffect } from "react";
const useTitleRoulette = () => {
  useEffect(() => {
    console.log(titles.length);
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 43);
      document.title = titles[randomIndex];
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};
export default useTitleRoulette;

const titles = [
  "( ノ ▽〃)",
  "(´◉㉨◉)",
  "(╯°□°)╯( ┻━┻",
  "(｢•-•)｢ ʷʱʸ?",
  "┏(-_-)┛",
  "⊆（⌒ᗜ⌒）⊇",
  "( .づ◡﹏◡ )づ.",
  "(=˃ᆺ˂=)",
  "^.ᆽ.^= ∫",
  "(๑✪ᆺ✪๑)",
  "ε=ε=ε=ε=┏( ￣▽￣)┛",
  "(˵ ͡~ ͜ʖ ͡°˵)ﾉ⌒♡*:･。.",
  "且_(ﾟ◇ﾟ；)ノﾞ",
  "(のĹ̯の)/",
  "༽つ۞﹏۞༼つ",
  "Ah, tea…(*´∀｀)_旦",
  "ᒄ₍⁽ˆ⁰ˆ⁾₎ᒃ♪♬",
  "( ｀▽´)Ψミ(/・ω・)/",
  "(◞‸◟ㆀ)",
  "┬┴┬┴┤⌐▀͡ ̯ʖ▀)",
  "（＾～＾）",
  "(๑*◡*๑)٩(❛ัᴗ❛ั⁎)ೄ",
  "ʸᵉᵃʰᵎᵎ े ̡̡ ⍤⃝  ̢̢ेे ꒳ᵒ꒳ᵎᵎ",
  "ʕ≧ᴥ≦ʔ",
  "Lemme go back to sleep!＼(*´Ｑ｀*)／～ｏ○◯",
  "٩(`･ω･´)و ☀️",
  "໒( •́ ∧ •̀ )७",
  "( ͡☉⁄ ⁄ ͜⁄ ͜ʖ̫⁄ ⁄ ͡☉)",
  "(つ ͡ꈍ ͜ʖ̫ ͡ꈍ )",
  "且_(ﾟ◇ﾟ；)ノﾞ",
  "(ﾉ*´･、>･)乂(・ι_・｀*)ﾉ",
  "(●__● )",
  "ε(´･●_･｀)з",
  "⁀⊙﹏☉⁀",
  "╰( ^o^)╮╰( ^o^)╮",
  "＼(ﾟｰﾟ＼)",
  "┏(-_-)┛┗(-_- )┓",
  "ﾍ(￣ー￣)ﾉ",
  "ᕙ(░ಥ╭͜ʖ╮ಥ░)━☆ﾟ.*･｡ﾟ",
  "（ ；¬＿¬)",
  "（´-`）. ｡oO（）",
  "（◎ー◎；）",
  "(*>ω<*)",
];
