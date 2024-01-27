import handleEq from "./handleEq";
import {gsap} from "gsap"
import {Draggable} from "gsap/Draggable"
import BasicKnob from "../BasicKnob/BasicKnob"

gsap.registerPlugin(Draggable)

export default function EqKnob({channel, param, className}) {

  return (
    <BasicKnob className={className} param={param} channel={channel} handleRotation={handleEq}/>
  );
}
