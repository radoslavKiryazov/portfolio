import List from "../components/List";

const HomePage = () => {
  return (
    <div>
      <List items={mainMenu}/>
    </div>
  );
};
export default HomePage;


const mainMenu = [
  'Home',
  'Projects',
  'Contact'
]
