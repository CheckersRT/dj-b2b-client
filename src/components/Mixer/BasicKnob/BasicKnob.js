import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import knobImage from "../knob.svg";
import knobBackground from "../knobBackground.svg";
import styled from "styled-components";

gsap.registerPlugin(Draggable);

export default function BasicKnob({
  handleRotation,
  channel,
  className,
  param,
}) {
  const knob = useRef(null);

  const getter = gsap.getProperty(knob.current);

  Draggable.create(knob.current, {
    type: "rotation",
    inertia: false,
    dragResistance: 0.7,
    onDrag: (value) => {
      console.log(value);
      const rotation = getter("rotation");
      console.log(rotation);
      handleRotation(rotation, "send", channel, param);
    },
  });

  return (
    <Container>
      <KnobName>{param}</KnobName>
      <KnobContainer>
        <StyledKnob ref={knob} alt="knob" src={knobImage}></StyledKnob>
      </KnobContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
`;

const KnobName = styled.p`
  font-size: 0.6em;
`;

const KnobContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${knobBackground});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
`;

const StyledKnob = styled.img`
width: 36px;
transform: translateX(1px)

`;
