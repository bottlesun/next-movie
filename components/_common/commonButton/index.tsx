import {Button} from "./commonButton.style";
import commonButton from "../../../interfaces/commonButton.interfaces";
import Link from "next/link";

const CommonButton = ({children,href} : commonButton) => {
  return (
    <Link href={`${href}`}>
      <Button>
          {children}
      </Button>
    </Link>
  )
}

export default CommonButton;