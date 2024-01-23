export default async function isTrackInDb(id) {
  try {
    const response = await fetch("http://localhost:3030/routes/isTrackInDb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    const track = await response.json();

    if (track.message) {
      return false;
    } else if (track.track) return track.track;

  } catch (error) {}
}
