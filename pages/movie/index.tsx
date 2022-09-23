import ContentsList from "../../components/_common/contentsList";
import SEO from "../../components/_common/seo";
import {MovieComponent} from "./movie.style";


const Movie = () => {

  return (
    <MovieComponent>
      <SEO title={'영화'}/>
      <div className={'header'}></div>

      <div className={'container'}>
          <div className={'inner'}>
            <ContentsList title={'Best Movie'} dataUrl={'/api/movies'} contentsType={'movie'}/>
            <ContentsList title={'Upcoming Movie'} dataUrl={`/api/movie/upcoming`} contentsType={'movie'}/>
          </div>
      </div>
    </MovieComponent>
  )
}

export default Movie;