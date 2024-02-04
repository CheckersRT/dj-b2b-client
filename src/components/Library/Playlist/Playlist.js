
export default function Playlist({
  playlist,
  setPlaylist,
}) {
  return (
    <li
      onClick={(event) => {
        event.stopPropagation();
        setPlaylist(playlist);
      }}
      key={playlist.attributes.Name}
      name={playlist.attributes.Name}
    >
      {playlist.attributes.Name}
    </li>
  );
}
