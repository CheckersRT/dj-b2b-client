import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import styled from "styled-components";
import jogWheelImg from "./JockyWheel-rotated.svg";

gsap.registerPlugin(Draggable);

export default function JogWheel({ className, player }) {
  const jogWheel = useRef(null);

  const getter = gsap.getProperty(jogWheel.current);

  Draggable.create(jogWheel.current, {
    type: "rotation",
    inertia: false,
    dragResistance: 0.7,
    onDrag: (value) => {
      console.log(value);
      const rotation = getter("rotation");
      console.log(rotation);
      // handleRotation(rotation, "send", channel, param)
    },
  });

  return (
    <StyledDiv className={className}>
      <StyledJogWheel ref={jogWheel} alt="jog wheel" src={jogWheelImg} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  // border: 1px solid blue;
  display: flex;
  justify-content: center;
`;

const StyledJogWheel = styled.img`
  cursor: grab;
  background-color: transparent;
  width: 68%;
  overflow: hidden;
`;
