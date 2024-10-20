import Char from "./components/Char";
import CharList from "./components/CharList";
import CharOne from "./components/CharOne";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Char>
        <CharList />
        <CharOne />
      </Char>
    </>
  );
};

export default App;
