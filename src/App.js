import { useState } from "react";
import Char from "./components/Char";
import CharList from "./components/CharList";
import CharOne from "./components/CharOne";
import Header from "./components/Header";

const App = () => {
  const [char , setchar] = useState([]);
  const [selectId , setSelectId] = useState("");
  const [select , setSelect] = useState(null);
  // console.log(selectId)
  return (
    <>
      <Header char={char} setchar={setchar} />
      <Char>
        <CharList char={char} setchar={setchar} selectId={selectId} setSelectId={setSelectId} />
        <CharOne selectId={selectId} select={select} setSelect={setSelect} />
      </Char>
    </>
  );
};

export default App;
