import {MovieItemComponent, MovieList, MovieItems} from "./upcomingMovie.style";
import useSWR from 'swr'
import fetcher from "../../../utils/fetcher";
import MovieApiDataInterface from "../../../interfaces/movie.interfaces";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

const UpcomingMovie = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const {data: upcomingData} = useSWR('/api/movies/upcoming', fetcher, {
    dedupingInterval: 2000,
  })
  console.log(upcomingData)
  return (
    <MovieList>
      <h3 className={'movieListTitle'}>Best Movie</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
      >
        <MovieItemComponent>
          {
            upcomingData?.map((movie: MovieApiDataInterface) => {
              return <SwiperSlide key={movie.id}>
                <MovieItems>
                  <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title}/>
                  <div className={'movieName'}>{movie.title}</div>
                  <span>{movie.release_date} 개봉</span>
                </MovieItems>
              </SwiperSlide>
            })
          }
        </MovieItemComponent>
      </Swiper>
    </MovieList>
  )
}

export default UpcomingMovie;