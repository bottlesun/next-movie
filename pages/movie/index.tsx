import ContentsList from "../../components/_common/contentsList";
import SEO from "../../components/_common/seo";
import useLogin from "../../hooks/useLogin";
import {MovieComponent} from "../../styles/movie.style";


const Movie = () => {

  useLogin();
  return (
    <MovieComponent>
      <SEO title={'영화'}/>
      <div className={'header'}></div>

      <div className={'container'}>
          <div className={'inner'}>
            <ContentsList title={'Best Movie'} dataUrl={'/api/movie'} contentsValue={'movie'} videos={false}/>
            <ContentsList title={'현재 상영 영화'} dataUrl={`/api/movie/now_playing`} contentsValue={'movie'} videos={false}/>
            <ContentsList title={'평점이 높은 영화'} dataUrl={`/api/movie/top_rated`} contentsValue={'movie'} videos={false}/>
          </div>
      </div>
    </MovieComponent>
  )
}

export default Movie;