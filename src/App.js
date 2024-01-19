import './App.css';
import Screen from './components/Screen/Screen';
import Mixer from './components/Mixer/Mixer';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <Screen/>
      <Player/>
      <Mixer/>
      <Player/>

    </div>
  );
}

export default App;
