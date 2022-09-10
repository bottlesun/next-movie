import { MovieListComponent} from "./movieList.style";
import SliderItem from "../../_common/movieList/sliderItem";

export interface movieList {
  title : string | undefined | null
  dataUrl: string | undefined | null

}

const MovieList = ({title , dataUrl} : movieList) => {

  return (
    <MovieListComponent>
      <h3 className={'movieListTitle'}>{title}</h3>
      <SliderItem dataUrl={dataUrl}  />
    </MovieListComponent>
  )
}

export default MovieList;