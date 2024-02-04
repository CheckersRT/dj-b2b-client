import { handleClick } from "../functions";
import styles from "./PlaylistList.module.css";
import Playlist from "../Playlist/Playlist";
import PlaylistFolder from "../PlaylistFolder/PlaylistFolder";

export default function PlaylistList({
  playlistsArray,
  setPlaylist,
  playlistSelected,
  setPlaylistSelected,
  setTracksArray,
  collection,
}) {

  return (
    <div className={styles.container}>
      <ul>
        {playlistsArray &&
          playlistsArray.map((playlist) =>
            playlist.attributes.Type === "0" ? (
              <PlaylistFolder
              collection={collection}
                playlistFolder={playlist}
                playlistSelected={playlistSelected}
                setPlaylistSelected={setPlaylistSelected}
                setTracksArray={setTracksArray}
                setPlaylist={setPlaylist}
              />
            ) : (
              <Playlist
              collection={collection}

                playlist={playlist}
                playlistSelected={playlistSelected}
                setPlaylistSelected={setPlaylistSelected}
                setTracksArray={setTracksArray}
                setPlaylist={setPlaylist}
              />
            )
          )}
      </ul>
    </div>
  );
}
