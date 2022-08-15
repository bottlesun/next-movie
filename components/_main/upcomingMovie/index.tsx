import { MovieList, MovieItems, MovieHoverItem, MovieItemTitleBox} from "./upcomingMovie.style";
import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import MovieApiDataInterface from "../../../interfaces/movie.interfaces";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { useState} from "react";

const UpcomingMovie = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const {data: upcomingData} = useSWR('/api/movies/upcoming', fetcher, {
    dedupingInterval: 2000,
  });

  const [movieItemHover, setMovieItemHover] = useState("");


  return (
    <MovieList>
      <h3 className={'movieListTitle'}>Best Movie</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
      >
          {
            upcomingData?.map((movie: MovieApiDataInterface) => {
              return <SwiperSlide
                key={movie.id}
                onMouseEnter={()=> setMovieItemHover(`${movie.id}`)}
                onMouseLeave={()=> setMovieItemHover("")}
              >
                <MovieItems className={`${movieItemHover !== '' ? 'on' : ''}`}>
                  <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title}/>
                  {
                    movieItemHover === (movie.id).toFixed() &&
                    <MovieHoverItem className={`${movieItemHover !== '' ? 'on' : ''}`}>
                      <p>
                        {movie.overview}
                      </p>
                    </MovieHoverItem>
                  }
                </MovieItems>

                <MovieItemTitleBox>
                  <div className={'movieName'}>{movie.title}</div>
                  <span>{movie.release_date} 개봉</span>
                </MovieItemTitleBox>
              </SwiperSlide>
            })
          }
      </Swiper>
    </MovieList>
  )
}

export default UpcomingMovie;