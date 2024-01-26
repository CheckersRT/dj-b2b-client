import handleVolumeFader from "./handleVolumeFader";
import styled from "styled-components";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import volumeSlider from "./level-meter-no-handle.svg";
import sliderHandle from "./level-meter-handle.svg";
import { useRef } from "react";

gsap.registerPlugin(Draggable);

export default function VolumeFader({ channel }) {
  const sliderRef = useRef();

  const getter = gsap.getProperty(sliderRef.current)

  Draggable.create(sliderRef.current, {
    type: "y",
    inertia: false,
    dragResistance: 0.7,
    // bounds: {top: 14, left: 0, height: 268},
    bounds: "#div",
    onDrag: (value) => {
      console.log(value.offsetY);
      const y = getter("y");
      console.log(y);
      handleVolumeFader(-y, "send", channel)
    },
  });

  return (
    <Container>
      <h2>{channel}</h2>
      <SliderContainer>
        <HandleBounds id="div">
          <StyledHandle
            ref={sliderRef}
            alt="slider-handle"
            src={sliderHandle}
          ></StyledHandle>
        </HandleBounds>
      </SliderContainer>
    </Container>
  );
}

const Container = styled.div`
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderContainer = styled.div`
  // width: 100%;
  // height: 100%;
  padding: 4% 7%;
  background-image: url(${volumeSlider});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  // border: 3px green solid;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const HandleBounds = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  // border: 2px solid brown;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledHandle = styled.img`
// border: 1px solid green;
background-color: transparent;
// position: relative;
// margin: auto;
height: 25%;
width: 58%;
`;
