import { handleClickTrack, handleLoadDeck } from "../../Library/functions";
import styles from "./TrackList.module.css";

export default function TrackList({
  playlistName,
  tracksArray,
  setPlayerUrlCh1,
  setPlayerUrlCh2,
  setMetaDataCh1,
  setMetaDataCh2,
  setIsPlayer1Loading,
  setIsPlayer2Loading,
  playlist,
}) {
  console.log("Playlist: ", playlist);
  return (
    <div className={styles.container}>
      <ul>
        {tracksArray
          ? tracksArray.playlistName === playlist.attributes.Name &&
            tracksArray.trackList.map((track) => (
              <div key={track.Name}>
                <li
                  name={track.Name}
                  onClick={(event) => handleClickTrack(event)}
                >
                  {track.Name}
                </li>
                <button
                  name={track.Name}
                  onClick={(event) =>
                    handleLoadDeck(
                      event,
                      setPlayerUrlCh1,
                      setIsPlayer1Loading,
                      setMetaDataCh1,
                      track
                    )
                  }
                >
                  Deck 1
                </button>
                <button
                  name={track.Name}
                  onClick={(event) =>
                    handleLoadDeck(
                      event,
                      setPlayerUrlCh2,
                      setIsPlayer2Loading,
                      setMetaDataCh2,
                      track
                    )
                  }
                >
                  Deck 2
                </button>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}
