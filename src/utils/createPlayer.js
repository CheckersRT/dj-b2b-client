import { Player } from "tone";
import {
  gainCh1,
  gainCh2,
  eqCh1,
  eqCh2,
  volCh1,
  volCh2,
  crossFader,
} from "./audioNodeSetUp";

export default function createPlayer(channel) {
  let url;

  if (channel === 1) {
    url = "/8096985_Sheen_(Original Mix).mp3";
  } else if (channel === 2) {
    url = "/8096989_Rub_(Original Mix).mp3";
  }

  const player = new Player(
    {
    url: url,
    onload: () => {
      console.log("loaded");
    },
  }
  );
//   await player.load(url)

  // sets up audio chain with imported nodes
  if (channel === 1) {
    player.chain(gainCh1, eqCh1, volCh1, crossFader.a);
  } else if (channel === 2) {
    player.chain(gainCh2, eqCh2, volCh2, crossFader.b);
  }

  return player;
}
