import handleVolumeFader from "./handleVolumeFader";
import styled from "styled-components"
import {gsap} from "gsap"
import {Draggable} from "gsap/Draggable"
import volumeSlider from "./level-meter-no-handle.svg"

gsap.registerPlugin(Draggable);


export default function VolumeFader({ channel }) {



  return (
    <Container>
      <h2>{channel}</h2>
      <SliderContainer>ddd

      </SliderContainer>
      {/* <label htmlFor={`ch${channel}-player-volume`}>Volume</label>
      <input
        name={`ch${channel}-player-volume`}
        id={`ch${channel}-player-volume`}
        type="range"
        min={-30}
        max={0}
        defaultValue={-2}
        onChange={(event) => handleVolumeFader(event, "send", channel)}
      /> */}
    </Container>
  );
}

const Container = styled.div`
width: 75%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid green;
margin: auto;
`

const SliderContainer = styled.div`

background-image: url(${volumeSlider});
background-position: center;
background-size: contain;
background-repeat: no-repeat;

height: 100%;
width: 100%;

`