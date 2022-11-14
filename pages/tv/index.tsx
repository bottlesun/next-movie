import SEO from "../../components/_common/seo";
import useLogin from "../../hooks/useLogin";
import {MovieComponent} from "../movie/movie.style";
import ContentsList from "../../components/_common/contentsList";


const TV = () => {

  useLogin();
  return (
    <MovieComponent>
      <SEO title={'TV 프로그램'}/>
      <div className={'header'}></div>

      <div className={'container'}>
        <div className={'inner'}>
          <ContentsList title={'Best TV 프로그램'} dataUrl={'/api/tv'} contentsValue={'tv'}/>
          <ContentsList title={'방영중인 TV 프로그램'} dataUrl={`/api/tv/on_the_air`} contentsValue={'tv'}/>
          <ContentsList title={'평점이 높은 TV 프로그램'} dataUrl={`/api/tv/top_rated`} contentsValue={'tv'}/>
        </div>
      </div>
    </MovieComponent>
  )
}

export default TV;