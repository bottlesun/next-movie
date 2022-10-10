import Image from "next/image";
import {SearchWrap} from "./search.style";
import {useCallback, useState} from "react";
import SearchActive from "./searchActive";

const searchIcon = '/images/icon_search.svg'
const closeIcon = '/images/icon_x.svg'

const Search = () => {
  const [toggleActive, setToggleActive] = useState(true);
  const searchToggle = useCallback(() => {
    setToggleActive(!toggleActive);
  }, [setToggleActive, toggleActive])

  return (
    <SearchWrap>
      <div className={'icon-button'}>
        <Image onClick={searchToggle} src={!toggleActive ? closeIcon : searchIcon} alt={'search-icon'} width={35}
               height={35}></Image>
      </div>

      {
        !toggleActive && <SearchActive/>
      }
    </SearchWrap>
  )
}

export default Search;