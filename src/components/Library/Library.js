import TrackList from "./TrackList/TrackList";
import PlaylistList from "./PlaylistList/PlaylistList";
import { useState } from "react";
import styles from "./Library.module.css"

export default function Library({
  playlistsArray,
  setPlayerUrlCh1,
  setPlayerUrlCh2,
  setIsPlayer1Loading,
  setIsPlayer2Loading,
  setMetaDataCh1,
  setMetaDataCh2,
  waveformCh1,
  waveformCh2,
}) {
  const [tracksArray, setTracksArray] = useState();
  const [playlistSelected, setPlaylistSelected] = useState(false);
  const [playlist, setPlaylist] = useState("");

  return (
    <div className={styles.container}>
      <PlaylistList
        playlistsArray={playlistsArray}
        setPlaylist={setPlaylist}
        playlistSelected={playlistSelected}
        setPlaylistSelected={setPlaylistSelected}
        setTracksArray={setTracksArray}
      />
      <TrackList
        setIsPlayer1Loading={setIsPlayer1Loading}
        setIsPlayer2Loading={setIsPlayer2Loading}
        setPlayerUrlCh1={setPlayerUrlCh1}
        setPlayerUrlCh2={setPlayerUrlCh2}
        // playlistName={playlist.attributes.Name}
        tracksArray={tracksArray}
        setMetaDataCh1={setMetaDataCh1}
        setMetaDataCh2={setMetaDataCh2}
        playlist={playlist}
        waveformCh1={waveformCh1}
        waveformCh2={waveformCh2}
      />
    </div>
  );
}
