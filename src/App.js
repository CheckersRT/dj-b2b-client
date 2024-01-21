import './App.css';
import Screen from './components/Screen/Screen';
import Mixer from './components/Mixer/Mixer';
import Deck from './components/Deck/Deck';
import { useState, useRef } from 'react';
import createPlayer from './utils/createPlayer';

const playerCh1 = createPlayer(1)
const playerCh2 = createPlayer(2)

function App() {
  const [metaDataCh1, setMetaDataCh1] = useState({})
  const [metaDataCh2, setMetaDataCh2] = useState({})

  const playerCh1Ref = useRef(playerCh1)
  const playerCh2Ref = useRef(playerCh2)


  return (
    <div className="App">
      <Screen metaDataCh1={metaDataCh1} metaDataCh2={metaDataCh2} player1={playerCh1Ref.current} player2={playerCh2Ref.current}/>
      <Deck player={playerCh1Ref.current} setMetaData={setMetaDataCh1}/>
      <Mixer player1={playerCh1Ref.current} player2={playerCh2Ref.current}/>
      <Deck player={playerCh2Ref.current} setMetaData={setMetaDataCh2}/>

    </div>
  );
}

export default App;
