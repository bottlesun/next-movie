import {Swiper, SwiperSlide} from "swiper/react";
import {MovieItems, MovieItemTitleBox} from "../movieList.style";
import useSWR from "swr";
import fetcher from "../../../../utils/fetcher";
import "swiper/css";
import {useState, memo} from "react";
import Link from "next/link";

export interface SliderMethod {
  dataUrl: string | undefined | null
  contentsType: string | undefined | null
}

const SliderItem = memo(({dataUrl, contentsType}: SliderMethod) => {

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
        Data?.results?.map((item: any) => {
          return <SwiperSlide
            key={item.id}
            onMouseEnter={() => setMovieItemHover(`${item.id}`)}
            onMouseLeave={() => setMovieItemHover("")}
          >

            <Link href={`/contents/${contentsType}/${item.id}`}>
              <MovieItems className={`${movieItemHover !== '' ? 'on' : ''}`}>
                <img src={`${IMG_URL}${item.poster_path }`} alt={item.title}/>
              </MovieItems>
            </Link>
            {contentsType === 'tv' ?
              <MovieItemTitleBox>
                <div className={'movieName'}>{item.name}</div>
                <span>{item.first_air_date} 방영일</span>
              </MovieItemTitleBox> :
              <MovieItemTitleBox>
                <div className={'movieName'}>{item.title}</div>
                <span>{item.release_date} 개봉</span>
              </MovieItemTitleBox>
            }
          </SwiperSlide>
        })
      }
    </Swiper>
  )
});

export default SliderItem