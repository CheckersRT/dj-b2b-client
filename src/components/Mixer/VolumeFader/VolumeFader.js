import handleVolumeFader from "./handleVolumeFader";
import styled from "styled-components";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import volumeSlider from "./level-meter-no-handle.svg";
import sliderHandle from "./level-meter-handle.svg";
import { useRef } from "react";

gsap.registerPlugin(Draggable);

export default function VolumeFader({ channel, className }) {
  const volSliderRef = useRef();

  const getter = gsap.getProperty(volSliderRef.current);

  Draggable.create(volSliderRef.current, {
    type: "y",
    inertia: false,
    dragResistance: 0.7,
    // bounds: { top: 0, left: 0, height: 50 },
    bounds: "#volDiv",
    onDrag: (value) => {
      const y = getter("y");
      console.log(y);
      handleVolumeFader(-y, "send", channel);
    },
  });

  return (
    <Container className={className}>
      <h2>{channel}</h2>
      <SliderContainer className={className}>
        <HandleBounds id="volDiv">
          <StyledHandle
            className={className}
            ref={volSliderRef}
            alt="slider-handle"
            src={sliderHandle}
          ></StyledHandle>
        </HandleBounds>
      </SliderContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px green solid;
  height: 100%;
`;

const SliderContainer = styled.div`
  width: 100%;
  // height: 100%;
  background-image: url(${volumeSlider});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 1px green solid;
  display: flex;
  justify-content: center;
`;

const HandleBounds = styled.div`
  border: 1px pink solid;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledHandle = styled.img`
  // border: 1px solid green;
  background-color: transparent;
  position: relative;
  margin: auto;
  height: 25%;
  width: 43%;
`;
