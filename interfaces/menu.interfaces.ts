import  {Dispatch, SetStateAction} from "react";

export default interface menuInterface {
  menuOpen: boolean | null
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}