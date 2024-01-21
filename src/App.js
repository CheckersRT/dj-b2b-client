import "./App.css";
import Screen from "./components/Screen/Screen";
import Mixer from "./components/Mixer/Mixer";
import Deck from "./components/Deck/Deck";
import { useState, useRef } from "react";
import createPlayer from "./utils/createPlayer";
import styled from "styled-components";

const playerCh1 = createPlayer(1);
const playerCh2 = createPlayer(2);

function App() {
  const [metaDataCh1, setMetaDataCh1] = useState({});
  const [metaDataCh2, setMetaDataCh2] = useState({});
  const [timeOnPlayCh1, setTimeOnPlayCh1] = useState(0);
  const [timeOnPlayCh2, setTimeOnPlayCh2] = useState(0);
  

  const playerCh1Ref = useRef(playerCh1);
  const playerCh2Ref = useRef(playerCh2);

  return (
    <div className="container">
      <Screen
        metaDataCh1={metaDataCh1}
        metaDataCh2={metaDataCh2}
        player1={playerCh1Ref.current}
        player2={playerCh2Ref.current}
        timeOnPlayCh1={timeOnPlayCh1}
        timeOnPlayCh2={timeOnPlayCh2}
      />
      <div className="controller">
        <Deck
          className="column"
          player={playerCh1Ref.current}
          setMetaData={setMetaDataCh1}
          setTimeOnPlay={setTimeOnPlayCh1}
        />

        <Mixer
          className="column"
          player1={playerCh1Ref.current}
          player2={playerCh2Ref.current}
        />
        <Deck
          className="column"
          player={playerCh2Ref.current}
          setMetaData={setMetaDataCh2}
          setTimeOnPlay={setTimeOnPlayCh2}
        />
      </div>
    </div>
  );
}

export default App;
