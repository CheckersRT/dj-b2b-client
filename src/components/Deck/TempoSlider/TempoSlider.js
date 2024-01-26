import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import handleTempoChange from "./handleTempoChange";
import styled from "styled-components";
import tempoSlider from "./TempoControl-no-handle.svg";
import tempoHandle from "./TempoControl-handle.svg";

gsap.registerPlugin(Draggable);

export default function TempoSlider({ className, player }) {
  const sliderRef = useRef();

  Draggable.create(sliderRef.current, {
    type: "y",
    inertia: false,
    dragResistance: 0.7,
    // bounds: {top: 14, left: 0, height: 268},
    bounds: "#div",
    onDrag: (value) => {
      console.log(value.offsetY);
      // const rotation = getter("rotation");
      // console.log(rotation);
      // handleRotation(rotation, "send", channel, param)
    },
  });

  return (
    <StyledDiv className={className}>
      <HandleBounds id="div">
        <StyledSlider
          ref={sliderRef}
          alt="tempo slider"
          src={tempoHandle}
          onDrag={(event) => handleTempoChange(event.target.value, player)}
        ></StyledSlider>
      </HandleBounds>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  padding: 0px 0px;
  background-image: url(${tempoSlider});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  // border: 3px green solid;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const HandleBounds = styled.div`
  margin-top: 10%;
  margin-bottom: 27%;
  // border: 2px solid brown;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledSlider = styled.img`
  // border: 1px solid green;
  background-color: transparent;
  position: relative;
  left: 3%;
  margin: auto;
  height: 25%;
  width: 51%;
`;
