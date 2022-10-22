import ContentsList from "../../components/_common/contentsList";
import SEO from "../../components/_common/seo";
import useLogin from "../../hooks/useLogin";
import {MovieComponent} from "./movie.style";


const Movie = () => {

  useLogin();
  return (
    <MovieComponent>
      <SEO title={'영화'}/>
      <div className={'header'}></div>

      <div className={'container'}>
          <div className={'inner'}>
            <ContentsList title={'Best Movie'} dataUrl={'/api/movies'} contentsType={'movie'}/>
            <ContentsList title={'현재 상영 영화'} dataUrl={`/api/movie/nowPlaying`} contentsType={'movie'}/>
            <ContentsList title={'평점이 높은 영화'} dataUrl={`/api/movie/topRated`} contentsType={'movie'}/>
            <ContentsList title={'개봉 예정 영화'} dataUrl={`/api/movie/upcoming`} contentsType={'movie'}/>
          </div>
      </div>
    </MovieComponent>
  )
}

export default Movie;