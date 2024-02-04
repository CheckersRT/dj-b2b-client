import TrackList from "./TrackList/TrackList";
import PlaylistList from "./PlaylistList/PlaylistList";
import { useState } from "react";
import styles from "./Library.module.css"

export default function Library({
  playlistsArray,
  collection,
  setPlayerUrlCh1,
  setPlayerUrlCh2,
  isPlayer1Loading,
  isPlayer2Loading,
  setIsPlayer1Loading,
  setIsPlayer2Loading,
  setMetaDataCh1,
  setMetaDataCh2,
  waveformCh1,
  waveformCh2,
  playerCh1,
  playerCh2
}) {
  const [playlistSelected, setPlaylistSelected] = useState(false);
  const [playlist, setPlaylist] = useState("");

  return (
    <div className={styles.container}>
      <PlaylistList
      collection={collection}
        playlistsArray={playlistsArray}
        setPlaylist={setPlaylist}
        playlistSelected={playlistSelected}
        setPlaylistSelected={setPlaylistSelected}
      />

      <TrackList
        isPlayer1Loading={isPlayer1Loading}
        isPlayer2Loading={isPlayer2Loading}
        setIsPlayer1Loading={setIsPlayer1Loading}
        setIsPlayer2Loading={setIsPlayer2Loading}
        setPlayerUrlCh1={setPlayerUrlCh1}
        setPlayerUrlCh2={setPlayerUrlCh2}
        collection={collection}
        setMetaDataCh1={setMetaDataCh1}
        setMetaDataCh2={setMetaDataCh2}
        playlist={playlist}
        waveformCh1={waveformCh1}
        waveformCh2={waveformCh2}
        playerCh1={playerCh1}
        playerCh2={playerCh2}
        />
    </div>
  );
}
