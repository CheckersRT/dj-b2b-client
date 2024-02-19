import "./App.css";
import Screen from "./components/Screen/Screen";
import Mixer from "./components/Mixer/Mixer";
import Deck from "./components/Deck/Deck";
import Library from "./components/Library/Library";
import { useState, useRef } from "react";
import createPlayer from "./utils/createPlayer";
import styled from "styled-components";
import LibraryLoadButton from "./components/Library/LibraryLoadButton/LibraryLoadButton";

const playerCh1 = createPlayer(1);
const playerCh2 = createPlayer(2);

function App(className) {
  const [metaDataCh1, setMetaDataCh1] = useState({});
  const [metaDataCh2, setMetaDataCh2] = useState({});
  const [timeOnPlayCh1, setTimeOnPlayCh1] = useState(0);
  const [timeOnPlayCh2, setTimeOnPlayCh2] = useState(0);
  const [timeElapsedCh1, setTimeElapsedCh1] = useState(0);
  const [timeElapsedCh2, setTimeElapsedCh2] = useState(0);
  const [xmlFile, setXmlFile] = useState("");
  const [playlistsArray, setPlaylistsArray] = useState();
  const [collection, setCollection] = useState([]);
  const [playerUrlCh1, setPlayerUrlCh1] = useState("");
  const [playerUrlCh2, setPlayerUrlCh2] = useState("");
  const [isPlayer1Loading, setIsPlayer1Loading] = useState(false);
  const [isPlayer2Loading, setIsPlayer2Loading] = useState(false);
  const [waveformCh1, setWaveformCh1] = useState({});
  const [waveformCh2, setWaveformCh2] = useState({});
  const [tempoChangePercentageCh1, setTempoChangePercentageCh1] = useState(0);
  const [tempoChangePercentageCh2, setTempoChangePercentageCh2] = useState(0);

  const playerCh1Ref = useRef(playerCh1);
  const playerCh2Ref = useRef(playerCh2);

  return (
    <Container className={className}>
      <Screen
        className={className}
        metaDataCh1={metaDataCh1}
        metaDataCh2={metaDataCh2}
        player1={playerCh1Ref.current}
        player2={playerCh2Ref.current}
        timeElapsedCh1={timeElapsedCh1}
        timeElapsedCh2={timeElapsedCh2}
        waveformCh1={waveformCh1}
        waveformCh2={waveformCh2}
        setWaveformCh1={setWaveformCh1}
        setWaveformCh2={setWaveformCh2}
        tempoChangePercentageCh1={tempoChangePercentageCh1}
        tempoChangePercentageCh2={tempoChangePercentageCh2}
      />
      <Controls className={className}>
        <Deck
          className={className}
          player={playerCh1Ref.current}
          playerUrl={playerUrlCh1}
          setPlayerUrl={setPlayerUrlCh1}
          isPlayerLoading={isPlayer1Loading}
          setIsPlayerLoading={setIsPlayer1Loading}
          metaData={metaDataCh1}
          setMetaData={setMetaDataCh1}
          timeOnPlay={timeOnPlayCh1}
          setTimeOnPlay={setTimeOnPlayCh1}
          timeElapsed={timeElapsedCh1}
          setTimeElapsed={setTimeElapsedCh1}
          waveform={waveformCh1}
          tempoChangePercentage={tempoChangePercentageCh1}
          setTempoChangePercentage={setTempoChangePercentageCh1}
        />

        <Mixer
          className={className}
          player1={playerCh1Ref.current}
          player2={playerCh2Ref.current}
        />
        <Deck
          className={className}
          player={playerCh2Ref.current}
          playerUrl={playerUrlCh2}
          setPlayerUrl={setPlayerUrlCh2}
          isPlayerLoading={isPlayer2Loading}
          setIsPlayerLoading={setIsPlayer2Loading}
          metaData={metaDataCh2}
          setMetaData={setMetaDataCh2}
          timeOnPlay={timeOnPlayCh2}
          setTimeOnPlay={setTimeOnPlayCh2}
          timeElapsed={timeElapsedCh2}
          setTimeElapsed={setTimeElapsedCh2}
          waveform={waveformCh2}
          tempoChangePercentage={tempoChangePercentageCh2}
          setTempoChangePercentage={setTempoChangePercentageCh2}
        />
      </Controls>
      {/* <LibraryLoadButton
        xmlFile={xmlFile}
        setXmlFile={setXmlFile}
        setPlaylistsArray={setPlaylistsArray}
        setCollection={setCollection}
      ></LibraryLoadButton> */}
      <Library
        className={className}
        playlistsArray={playlistsArray}
        collection={collection}
        setPlayerUrlCh1={setPlayerUrlCh1}
        setPlayerUrlCh2={setPlayerUrlCh2}
        isPlayer1Loading={isPlayer1Loading}
        isPlayer2Loading={isPlayer2Loading}
        setIsPlayer1Loading={setIsPlayer1Loading}
        setIsPlayer2Loading={setIsPlayer2Loading}
        setMetaDataCh1={setMetaDataCh1}
        setMetaDataCh2={setMetaDataCh2}
        waveformCh1={waveformCh1}
        waveformCh2={waveformCh2}
        playerCh1={playerCh1Ref}
        playerCh2={playerCh2Ref}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 90%;
  margin: auto;
  // border: 3px pink solid;
  height: 75vh;
`;

const Controls = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 2fr 3fr;
  // border: 3px blue solid;
  height: 100%;
`;
