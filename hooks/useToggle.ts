import {Dispatch, MouseEventHandler, useCallback, useState} from "react";

export interface searchToggleInterface {
  searchToggle: MouseEventHandler<HTMLImageElement | HTMLLIElement>
  setToggleActive: Dispatch<boolean>
  toggleActive: boolean
}

export default function useToggle(): searchToggleInterface {
  const [toggleActive, setToggleActive] = useState(true);

  const searchToggle = useCallback(() => {
    return setToggleActive(!toggleActive);
  }, [setToggleActive, toggleActive])

  return {searchToggle, setToggleActive, toggleActive}
}
