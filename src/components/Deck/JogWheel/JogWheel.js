import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useState } from "react";
import styled from "styled-components";
import jogWheelImg from "./JockyWheel-rotated.svg";
import handleJogWheel from "./handleJogWheel";

gsap.registerPlugin(Draggable);

export default function JogWheel({ className, player, waveform, tempoChangePercentage }) {
  const [endPoint, setEndPoint] = useState(0)
  const jogWheel = useRef(null);

  const getter = gsap.getProperty(jogWheel.current);

  Draggable.create(jogWheel.current, {
    type: "rotation",
    inertia: false,
    dragResistance: 0.7,
    onDrag: (value) => {
      console.log(value);
      const rotation = getter("rotation");
      const incrementedRotation = rotation - endPoint;
      console.log(rotation, incrementedRotation);
      handleJogWheel(incrementedRotation, "send", player, waveform, tempoChangePercentage)
    },
    onDragEnd: () => {
      const endPoint = getter("rotation")
      console.log(endPoint)
      setEndPoint(endPoint)
    }
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
  overflow: visible;
`;

const StyledJogWheel = styled.img`
  cursor: grab;
  background-color: transparent;
  object-fit: cover;
  width: 65%;
  padding-top: 10px;
  overflow: hidden;
`;
