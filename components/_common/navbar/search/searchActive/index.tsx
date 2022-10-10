import {SearchActiveWrap} from "../search.style";



const SearchActive = () => {
  return (
    <SearchActiveWrap >
      <div className={'searchInputGuide'}>
        <div className={'searchInput'} onClick={(e) => e.stopPropagation()}>
          <label htmlFor="searchInput"></label>
          <input id={'searchInput'} type="text" placeholder={'영화, TV 프로그램 이름으로 검색해주세요.'}/>
          <button></button>
        </div>
        <hr/>
      </div>
    </SearchActiveWrap>
  )
}
export default SearchActive;