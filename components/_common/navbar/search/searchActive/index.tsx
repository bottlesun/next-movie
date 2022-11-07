import useSWR from "swr";
import fetcher from "../../../../../utils/fetcher";
import {SearchActiveWrap, SearchContentsImgUl, SearchContentsTextUl} from "../search.style";
import {ChangeEvent, useCallback, useState, MouseEventHandler} from "react";
import Image from "next/image";
import Link from "next/link";


export interface searchToggleInterface {
  searchToggle: MouseEventHandler<HTMLImageElement | HTMLLIElement>
}

const SearchActive = ({searchToggle}: searchToggleInterface) => {
  const [text, setText] = useState('');
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [text, setText])
  const {data: searchData} = useSWR((text.length === 0) ? null : `/api/search/${text}`, fetcher);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/'


  return (
    <SearchActiveWrap onClick={searchToggle}>
      <div className={'searchInputGuide'}>
        <div className={'searchInput'} onClick={(e) => e.stopPropagation()}>
          <label htmlFor="searchInput"></label>
          <input id={'searchInput'} type="text"
                 value={text} onChange={onChange}
                 placeholder={'영화, TV 프로그램 이름으로 검색해주세요.'}/>
          <button></button>
        </div>
        <hr/>
      </div>

      <SearchContentsImgUl>
        {
          searchData?.results?.slice(0, 5)?.map((searchItemImg: any) => {
            return <Link key={searchItemImg.id} href={`/contents/${searchItemImg.media_type}/${searchItemImg.id}`}>
              <li>
                <p>
                  <Image src={searchItemImg.poster_path === null ? '/images/dummy.png' : IMG_URL + searchItemImg.poster_path } alt={searchItemImg.name}
                         onClick={searchToggle}
                         layout='fill'></Image>
                </p>
                <span>{searchItemImg.title || searchItemImg.name}</span>
              </li>
            </Link>
          })
        }
      </SearchContentsImgUl>

      <SearchContentsTextUl>
        {
          searchData?.results.slice(5, 15).map((searchItem: any) => {
            return <Link key={searchItem.id} href={`/contents/${searchItem.media_type}/${searchItem.id}`}>
              <li onClick={searchToggle}>
                {searchItem.title || searchItem.name}</li>
            </Link>
          })
        }
      </SearchContentsTextUl>

    </SearchActiveWrap>
  )
}
export default SearchActive;

