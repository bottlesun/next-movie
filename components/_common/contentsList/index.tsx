import {movieList} from "../../../interfaces/movie.interfaces";
import {MovieListComponent} from "./movieList.style";
import SliderItem from "./sliderItem";
import VideosItem from "./videosItem";

const ContentsList = ({title, dataUrl, contentsValue, videos}: movieList) => {

  return (
    <MovieListComponent>
      <h3 className={'movieListTitle'}>{title}</h3>
      {
        videos ?
          <VideosItem dataUrl={dataUrl} /> :
          <SliderItem dataUrl={dataUrl} contentsValue={contentsValue} />
      }
    </MovieListComponent>
  )
}

export default ContentsList;