import Link from "next/link";
import {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import useSWR from "swr";
import ContentsList from "../../components/_common/contentsList";
import SEO from "../../components/_common/seo";
import useLogin from "../../hooks/useLogin";
import fetcher from "../../utils/fetcher";
import {MovieComponent} from "../movie/movie.style";

import {useRouter} from 'next/router'
import {SearchLength, SearchWrap} from "./search.style";

const Search = () => {
  const router = useRouter()
  const keyword = router.query.keyword;
  const [text, setText] = useState(keyword);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [setText])

  const {data: searchData} = useSWR(`/api/search/multi/${keyword}`, fetcher);
  const searchTotal = searchData === undefined ? 0 : searchData?.total_results === undefined ? 0 : searchData?.total_results;

  const onEnterEventKeyPress = (e: KeyboardEvent<HTMLTableSectionElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?keyword=${text}`);
    }
  }


  useLogin();
  return (
    <MovieComponent>
      <SEO title={'MOVING'}/>
      <div className={'header'}></div>

      <div className={'container'}>

        <SearchWrap onKeyDown={onEnterEventKeyPress}>
          <div className={'searchInputGuide'}>
            <div className={'searchWrap'}>
              <div className={'searchInput'}>
                <label htmlFor="searchInputId"></label>
                <input id={'searchInputId'} type="text"
                       value={text} onChange={onChange}
                       placeholder={'영화, TV 프로그램 이름으로 검색해주세요.'}/>
              </div>
              <Link href={`/search?keyword=${text}`}>
                <button></button>
              </Link>
            </div>
            <hr/>
          </div>
        </SearchWrap>

        <div className={'inner'}>
          <SearchLength>
            &quot;{keyword}&quot; 의 검색결과 {searchTotal} 개 있습니다.
          </SearchLength>

          <ContentsList title={'영화'} dataUrl={`/api/search/movie/${keyword}`} contentsValue={'movie'} videos={false}/>
          <ContentsList title={'TV 프로그램'} dataUrl={`/api/search/tv/${keyword}`} contentsValue={'tv'} videos={false}/>
        </div>
      </div>
    </MovieComponent>
  )
}

export default Search;