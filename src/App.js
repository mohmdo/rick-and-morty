import { useState } from "react";
import Char from "./components/Char";
import CharList from "./components/CharList";
import CharOne from "./components/CharOne";
import Header from "./components/Header";

const App = () => {
  const [char , setchar] = useState([]);
  const [selectId , setSelectId] = useState("");
  const [select , setSelect] = useState(null);
  const [heart , setHeart] = useState([]);
  // console.log(selectId)
  return (
    <>
      <Header char={char} setchar={setchar} heart={heart} />
      <Char>
        <CharList char={char} setchar={setchar} selectId={selectId} setSelectId={setSelectId} />
        <CharOne selectId={selectId} select={select} setSelect={setSelect} heart={heart} setHeart={setHeart} />
      </Char>
    </>
  );
};

export default App;
