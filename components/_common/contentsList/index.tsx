import { MovieListComponent} from "./movieList.style";
import SliderItem from "./sliderItem";

export interface movieList {
  title : string | undefined | null
  dataUrl: string | undefined | null
  contentsType : string | undefined | null
}

const ContentsList = ({title , dataUrl, contentsType} : movieList) => {

  return (
    <MovieListComponent>
      <h3 className={'movieListTitle'}>{title}</h3>

         <SliderItem dataUrl={dataUrl} contentsType={contentsType}  />

    </MovieListComponent>
  )
}

export default ContentsList;