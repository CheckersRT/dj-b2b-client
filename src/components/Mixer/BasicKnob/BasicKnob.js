import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import knobImage from "../knob.svg";
import knobBackground from "../knobBackground.svg";
import styled from "styled-components"

gsap.registerPlugin(Draggable);

export default function BasicKnob({ handleRotation, channel, className, param }) {
  const knob = useRef(null);

  const getter = gsap.getProperty(knob.current)

  Draggable.create(knob.current, {
    type: "rotation",
    inertia: false,
    dragResistance: 0.7,
    onDrag: (value) => {
        console.log(value)
        const rotation = getter("rotation")
        console.log(rotation);
        handleRotation(rotation, "send", channel, param)
    }
  });

  return (
    <Container className={className}>
      <KnobContainer>
        <StyledKnob ref={knob} alt="knob" src={knobImage}></StyledKnob>
      </KnobContainer>
      <p>{param}</p>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid green;
margin: auto;
`;

const KnobContainer = styled.div`
margin: auto;
padding: 0;
display: flex;
align-items: center;
background-image: url(${knobBackground});
background-position: center;
background-size: container;
background-repeat: no-repeat;

border: 1px solid green;
width: 80%;
height: 100%;
`

const StyledKnob = styled.img`
margin: auto;
width: 65%;
// border: 1px solid orange;
background-color: transparent;
`
