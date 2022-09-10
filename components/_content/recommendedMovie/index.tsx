import {RecommendedWrap} from "./recommendedMovie.style";
import MovieList from "../../_common/movieList";

interface id {
  id: string | null | undefined
}

const RecommendedMovie = ({id}: id) => {

  return (
    <RecommendedWrap>
      <MovieList title={'Similar Movie'} dataUrl={`/api/contents/${id}/similar`}/>
    </RecommendedWrap>
  )
}

export default RecommendedMovie