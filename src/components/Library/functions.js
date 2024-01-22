export async function handleClick(
  event,
  playlistSelected,
  setPlaylistSelected,
  setTracksArray
) {
  const name = event.target.getAttribute("name");
  console.log(event.target.getAttribute("name"));

  setPlaylistSelected(!playlistSelected);

  try {
    const response = await fetch("http://localhost:3030/getTracksInPlaylist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlistName: name }),
    });

    const data = await response.json();
    console.log(data);
    setTracksArray(data);
  } catch (error) {}
}

export async function handleClickTrack(event) {
  event.stopPropagation();
  const name = event.target.getAttribute("name");

  console.log(name);
}

export async function handleLoadDeck1(event) {
  const name = event.target.getAttribute("name");

  const response = await fetch("http://localhost:3030/uploadTrack", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ trackName: name }),
  });
  const data = await response.json()
  setPlayerUrl(data)
}
