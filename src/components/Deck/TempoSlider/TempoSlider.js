import handleTempoChange from "./handleTempoChange";
import styled from "styled-components"
import tempoSlider from "./TempoControl-no-handle.svg"

export default function TempoSlider({ className, player }) {
  return (
    <StyledDiv className={className}>
        <StyledSlider
          className={className}
          name="tempoSlider"
          min={-0.06}
          max={0.06}
          step={0.01}
          defaultValue={0}
          type="range"
          onChange={(event) => handleTempoChange(event.target.value, player)}
        ></StyledSlider>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
height: 100%;
width: 100%;
padding: 0px 0px;
background-image: url(${tempoSlider});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
border: 3px green solid;
overflow: hidden;
`

const StyledSlider = styled.input`
-webkit-appearance: none;
border: 1px solid green;
background-color: transparent;
appearance: none;
position: relative;
margin: auto;
width: 100%;
top: 47%;

&::-webkit-slider-runnable-track {
    // appearance: none;
    // background-color: red;
    transform: rotate(90deg);
  }

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20%;
    height: 60px;
    // transform: translate(-3.5px, -3px);
    background-image: url(/images/TempoControl-handle-rotated.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  

`