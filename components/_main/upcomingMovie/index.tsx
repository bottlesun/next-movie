import {MovieList, MovieItems, MovieHoverItem, MovieItemTitleBox} from "./upcomingMovie.style";
import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import {useState} from "react";
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