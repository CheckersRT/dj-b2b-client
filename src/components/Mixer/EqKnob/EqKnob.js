import handleEq from "./handleEq";
import {gsap} from "gsap"
import {Draggable} from "gsap/Draggable"
import styles from "./EqKnob.module.css"
import {useRef} from "react"
import BasicKnob from "../BasicKnob/BasicKnob";

gsap.registerPlugin(Draggable)

export default function EqKnob({channel, param}) {

  return (
    <BasicKnob param={param} channel={channel} handleRotation={handleEq}/>
  );
}
