import  {Dispatch, SetStateAction} from "react";

export interface menuInterface {
  menuOpen: boolean | null
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}
