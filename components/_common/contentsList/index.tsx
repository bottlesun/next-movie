import {MovieListComponent} from "./movieList.style";
import SliderItem from "./sliderItem";

export interface movieList {
  title: string | undefined | null
  dataUrl: string | undefined | null
  contentsValue: string | undefined | null
}

const ContentsList = ({title, dataUrl, contentsValue}: movieList) => {

  return (
    <MovieListComponent>
      <h3 className={'movieListTitle'}>{title}</h3>
      <SliderItem dataUrl={dataUrl} contentsValue={contentsValue}/>
    </MovieListComponent>
  )
}

export default ContentsList;