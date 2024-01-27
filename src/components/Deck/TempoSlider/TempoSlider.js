import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import handleTempoSlider from "./handleTempoSlider";
import styled from "styled-components";
import tempoSlider from "./TempoControl-no-handle.svg";
import tempoHandle from "./TempoControl-handle.svg";

gsap.registerPlugin(Draggable);

export default function TempoSlider({ className, channel, player }) {
  const sliderRef = useRef();

  const getter = gsap.getProperty(sliderRef.current)

  Draggable.create(sliderRef.current, {
    type: "y",
    inertia: false,
    dragResistance: 0.7,
    // bounds: {top: 14, left: 0, height: 268},
    bounds: "#div",
    onDrag: (value) => {
      // console.log(value.offsetY);
      const y = getter("y");
      console.log(y);
      handleTempoSlider(y, "send", channel, player)
    },
  });

  return (
    <StyledDiv className={className}>
      <HandleBounds id="div">
        <StyledSlider
          ref={sliderRef}
          alt="tempo slider"
          src={tempoHandle}
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
  // border: 1px green solid;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const HandleBounds = styled.div`
  margin-top: 10%;
  margin-bottom: 27%;
  // border: 2px solid pink;
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
