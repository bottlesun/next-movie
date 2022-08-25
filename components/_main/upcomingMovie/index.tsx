import {MovieList, MovieItems, MovieHoverItem, MovieItemTitleBox} from "./upcomingMovie.style";
import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import MovieApiDataInterface from "../../../interfaces/movie.interfaces";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import {useState} from "react";
import SliderMainItem from "./sliderMainItem";

const UpcomingMovie = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const {data: upcomingData} = useSWR('/api/movies/upcoming', fetcher, {
    dedupingInterval: 2000,
  });

  const [movieItemHover, setMovieItemHover] = useState("");


  return (
    <MovieList>
      <h3 className={'movieListTitle'}>Best Movie</h3>
      <SliderMainItem/>
    </MovieList>
  )
}

export default UpcomingMovie;