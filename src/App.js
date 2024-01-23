import "./App.css";
import Screen from "./components/Screen/Screen";
import Mixer from "./components/Mixer/Mixer";
import Deck from "./components/Deck/Deck";
import Library from "./components/Library/Library";
import { useState, useRef } from "react";
import createPlayer from "./utils/createPlayer";

const playerCh1 = createPlayer(1);
const playerCh2 = createPlayer(2);

function App() {
  const [metaDataCh1, setMetaDataCh1] = useState({});
  const [metaDataCh2, setMetaDataCh2] = useState({});
  const [timeOnPlayCh1, setTimeOnPlayCh1] = useState(0);
  const [timeOnPlayCh2, setTimeOnPlayCh2] = useState(0);
  const [xmlFile, setXmlFile] = useState("");
  const [playlistsArray, setPlaylistsArray] = useState();
  const [playerUrlCh1, setPlayerUrlCh1] = useState("");
  const [playerUrlCh2, setPlayerUrlCh2] = useState("");
  const [isPlayer1Loading, setIsPlayer1Loading] = useState(false);
  const [isPlayer2Loading, setIsPlayer2Loading] = useState(false);

  const playerCh1Ref = useRef(playerCh1);
  const playerCh2Ref = useRef(playerCh2);

  async function handleSubmit(event, xmlFile) {
    event.preventDefault();
    if (!xmlFile) return;

    const data = await saveXML(event, xmlFile);
    console.log(data);
    if (data.message === "success") {
      getPlaylists();
    }
  }

  async function getPlaylists() {
    try {
      const response = await fetch("http://localhost:3030/getPlaylists", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setPlaylistsArray(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function saveXML(event, xmlFile) {
    const contentType = xmlFile.type;
    console.log(contentType);

    console.log(xmlFile);
    try {
      const response = await fetch("http://localhost:3030/saveXML", {
        method: "POST",
        headers: {
          "Content-Type": contentType,
        },
        body: xmlFile,
      });
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

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
          playerUrl={playerUrlCh1}
          setPlayerUrl={setPlayerUrlCh1}
          isPlayerLoading={isPlayer1Loading}
          setIsPlayerLoading={setIsPlayer1Loading}
          metaData={metaDataCh1}
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
          playerUrl={playerUrlCh2}
          setPlayerUrl={setPlayerUrlCh2}
          isPlayerLoading={isPlayer2Loading}
          setIsPlayerLoading={setIsPlayer2Loading}
          setMetaData={setMetaDataCh2}
          setTimeOnPlay={setTimeOnPlayCh2}
        />
      </div>
      <form onSubmit={(event) => handleSubmit(event, xmlFile)}>
        <label htmlFor="xmlUpload"></label>
        <input
          name="xmlUpload"
          type="file"
          onChange={(event) => setXmlFile(event.target.files[0])}
        />
        <button type="submit">Upload XML</button>
      </form>
      <Library
        playlistsArray={playlistsArray}
        setPlayerUrlCh1={setPlayerUrlCh1}
        setPlayerUrlCh2={setPlayerUrlCh2}
        setIsPlayer1Loading={setIsPlayer1Loading}
        setIsPlayer2Loading={setIsPlayer2Loading}
        setMetaDataCh1={setMetaDataCh1}
        setMetaDataCh2={setMetaDataCh2}
      />
    </div>
  );
}

export default App;
