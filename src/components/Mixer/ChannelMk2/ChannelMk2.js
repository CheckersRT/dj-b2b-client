import BasicKnob from "../BasicKnob/BasicKnob";
import GainKnob from "../GainKnob/GainKnob";
import VolumeFaderMk2 from "../VolumeFaderMk2/VolumeFaderMk2";
import styled from "styled-components"
import EqKnob from "../EqKnob/EqKnob";

export default function ChannelMk2({ className, channel }) {
  return (
    <ChannelGrid className={className}>
        {/* <GainKnob></GainKnob> */}
        <GainKnob></GainKnob>
        <EqKnob param={"HIGH"}></EqKnob>
        <EqKnob param={"MID"}></EqKnob>
        <EqKnob param={"LOW"}></EqKnob>
      {/* <GainKnob></GainKnob>
      <EqKnob channel={channel} param={"HIGH"}></EqKnob>
      <EqKnob channel={channel} param={"MID"}></EqKnob>
      <EqKnob channel={channel} param={"LOW"}></EqKnob> */}
      <h3>{channel}</h3>
      <VolumeFaderMk2></VolumeFaderMk2>
    </ChannelGrid>
  );
}

const ChannelGrid = styled.div`
display: grid;
grid-template-rows: repeat(4, 2fr) 1fr 4fr;
justify-items: center;
height: 100%;
width: 100%;
`