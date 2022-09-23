import SEO from "../../components/_common/seo";
import {MovieComponent} from "../movie/movie.style";
import ContentsList from "../../components/_common/contentsList";


const TV = () => {
return(
  <MovieComponent>
    <SEO title={'TV 프로그램'}/>
    <div className={'header'}></div>

    <div className={'container'}>
      <div className={'inner'}>
        <ContentsList title={'Best TV show'} dataUrl={'/api/tv'} contentsType={'tv'}/>
        <ContentsList title={'방영중'} dataUrl={`/api/tv/onAir`} contentsType={'tv'}/>
        <ContentsList title={'평점이 높은 TV show'} dataUrl={`/api/tv/topRated`} contentsType={'tv'}/>

      </div>
    </div>
  </MovieComponent>
)
}

export default TV;