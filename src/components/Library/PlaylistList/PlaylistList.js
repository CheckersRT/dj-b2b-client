import { handleClick } from "../functions";
import styles from "./PlaylistList.module.css"

export default function PlaylistList({ playlistsArray, setPlaylist, playlistSelected, setPlaylistSelected, setTracksArray }) {
  return (
    <div className={styles.container}>
    <ul>
      {playlistsArray
        ? playlistsArray.map((playlist) => (
            <li
              onClick={(event) => {
                handleClick(
                  event,
                  playlistSelected,
                  setPlaylistSelected,
                  setTracksArray,
                );
                setPlaylist(playlist)

              }
              }
              key={playlist.attributes.Name}
              name={playlist.attributes.Name}
            >{playlist.attributes.Name}</li>
          ))
        : null}
    </ul>
    </div>
  );
}
