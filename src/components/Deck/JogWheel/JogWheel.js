import handleJogWheel from "./handleJogWheel";
// import styles from "./JogWheel.module.css";
import styled from "styled-components";
import jogWheel from "./JockyWheel-rotated.svg"

export default function JogWheel({ className, player }) {
  return (
    <StyledDiv
      className={className}
      $imgUrl={"/public/images/JockyWheel-rotated.svg"}
      $color={"transparent"}
    >
      <StyledJogWheel
        className={className}
        name={`ch${player.name}-jogWheel`}
        id={`ch${player.name}-jogWheel`}
        type="range"
        min={-1}
        max={1}
        step={0.1}
        defaultValue={0}
        onChange={(event) => handleJogWheel(event, "send", player)}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
height: 100%;
width: 100%;
position: relative;
overflow: hidden;
border: 1px solid blue;

&:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: transparent;
  background-image: url(${(props) => jogWheel});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledJogWheel = styled.input`
-webkit-appearance: none;
appearance: none;
position: absolute;
margin: -85px 0px 0px 85px;
height: 100%;
width: 100%;
cursor: grab;
outline: none;
transform: rotate(270deg);
translate: -85px 85px;
background-color: transparent;

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 153px;
  height: 600px;
  /* background-color: red; */
}
`