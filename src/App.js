import './App.css';
import Screen from './components/Screen/Screen';
import Mixer from './components/Mixer/Mixer';
import Player from './components/Player/Player';
import { useState } from 'react';

function App() {
  const [fileData, setFileData] = useState("")

  return (
    <div className="App">
      <Screen/>
      <Player fileData={fileData} setFileData={setFileData}/>
      <Mixer/>
      <Player fileData={fileData} setFileData={setFileData}/>

    </div>
  );
}

export default App;
