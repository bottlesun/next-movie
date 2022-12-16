import Image from "next/image";
import {useCallback} from "react";
import {searchToggleInterface} from "../../../../hooks/useToggle";
import {SearchWrap} from "./searchbar.style";
import SearchActive from "./searchActive";

const searchIcon = '/images/icon_search.svg'
const closeIcon = '/images/icon_x.svg'


const SearchBar = ({toggleActive, setToggleActive, searchToggle}: searchToggleInterface) => {

  return (
    <SearchWrap>
      <div className={'icon-button'}>
        <Image onClick={searchToggle} src={!toggleActive ? closeIcon : searchIcon} alt={'search-icon'} width={35}
               height={35}></Image>
      </div>

      {
        !toggleActive && <SearchActive searchToggle={searchToggle} toggleActive={toggleActive}
                                       setToggleActive={setToggleActive}/>
      }
    </SearchWrap>
  )
}

export default SearchBar;