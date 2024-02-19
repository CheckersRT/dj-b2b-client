import styles from "./PlaylistList.module.css";
import Playlist from "../Playlist/Playlist";
import PlaylistFolder from "../PlaylistFolder/PlaylistFolder";
import Collection from "../Collection/Collection";

export default function PlaylistList({
  playlistsArray,
  setPlaylist,
  playlistSelected,
  setPlaylistSelected,
  collection,
}) {
  return (
    <div className={styles.container}>
      <Collection />
      <ul>
        {playlistsArray &&
          playlistsArray.map((playlist) =>
            playlist.attributes.Type === "0" ? (
              <PlaylistFolder
                collection={collection}
                playlistFolder={playlist}
                playlistSelected={playlistSelected}
                setPlaylistSelected={setPlaylistSelected}
                setPlaylist={setPlaylist}
                key={playlist.attributes.Name}
              />
            ) : (
              <Playlist
                playlist={playlist}
                playlistSelected={playlistSelected}
                setPlaylistSelected={setPlaylistSelected}
                setPlaylist={setPlaylist}
                key={playlist.attributes.Name}
              />
            )
          )}
      </ul>
    </div>
  );
}
