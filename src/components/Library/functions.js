import uploadTrack from "../../api/uploadTrack";
import getMetaData from "../../api/getMetaData";
import saveToDb from "../../api/saveToDb";
import isTrackInDb from "../../api/isTrackInDb";

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

export async function handleLoadDeck(event, setPlayerUrl, setIsPlayerLoading, setMetaData, track) {
  event.stopPropagation();
  const name = event.target.getAttribute("name");
  setIsPlayerLoading(true)

  const trackInDb = await isTrackInDb(track.TrackID);

  if(trackInDb) {
      setPlayerUrl(trackInDb.url)
      setMetaData(trackInDb)
  } else if (trackInDb === false) {
    const data = await uploadTrack(name)
    const url = data.url
    setPlayerUrl(url)

    const metaData = {
      trackID: track.TrackID,
      name: track.Name,
      artist: track.Artist,
      composer: track.Composer,
      album: track.Album,
      grouping: track.Grouping,
      genre: track.Genre,
      kind: track.Kind,
      size: track.Size,
      totalTime: track.TotalTime,
      discNumber: track.DiscNumber,
      trackNumber: track.TrackNumber,
      year: track.Year,
      bpm: track.AverageBpm,
      dateAdded: track.DateAdded,
      bitRate: track.BitRate,
      sampleRate: track.SampleRate,
      comments: track.Comments,
      playCount: track.PlayCount,
      rating: track.Rating,
      location: track.Location,
      remixer: track.Remixer,
      tonality: track.Tonality,
      label: track.Label,
      mix: track.Mix,
      url: data.url
    }
    setMetaData(metaData)
    saveToDb(metaData)
  }

}
