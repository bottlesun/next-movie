import {MouseEventHandler} from "react";

export default interface commonButton {
  disabled : boolean | undefined,
  children : string | number,
  onClick? : MouseEventHandler | undefined;

}
