import PageShell from "./components/PageShell";
import HomePage from "./pages/HomePage";
import useTitleRoulette from "./hooks/useTitleRoulette";
const App = () => {
  useTitleRoulette();
  return (
    <PageShell>
      <HomePage />
    </PageShell>
  );
};

export default App;
