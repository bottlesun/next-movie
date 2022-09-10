import {Swiper, SwiperSlide} from "swiper/react";
import {MovieHoverItem, MovieItems, MovieItemTitleBox} from "../movieList.style";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";
import "swiper/css";
import {useState, memo} from "react";

interface SliderMethod {
  dataUrl: string | undefined | null
}

const SliderItem = memo(({dataUrl}: SliderMethod) => {

  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  const {data: Data} = useSWR(dataUrl, fetcher, {
    dedupingInterval: 2000,
  });


  const [movieItemHover, setMovieItemHover] = useState("");

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={6}
    >
      {
        Data?.results?.map((movie: any ) => {
          return <SwiperSlide
            key={movie.id}
            onMouseEnter={() => setMovieItemHover(`${movie.id}`)}
            onMouseLeave={() => setMovieItemHover("")}
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
  )
});

export default SliderItem