import {Button} from "./commonButton.style";
import commonButton from "../../../interfaces/commonButton.interfaces";

const CommonButton = ({disabled,children,onClick} : commonButton) => {
  return (
    <Button disabled={disabled} onClick={onClick}>{children}</Button>
  )
}

export default CommonButton;