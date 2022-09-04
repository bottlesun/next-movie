import {MovieList} from "./upcomingMovie.style";

import SliderMainItem from "./sliderMainItem";

const UpcomingMovie = () => {

  return (
    <MovieList>
      <h3 className={'movieListTitle'}>Best Movie</h3>
      <SliderMainItem/>
    </MovieList>
  )
}

export default UpcomingMovie;